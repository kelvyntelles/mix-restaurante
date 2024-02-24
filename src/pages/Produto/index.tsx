import { HeaderGoPage } from "../../components/HeaderGoPage";
import { useParams, useNavigate } from "react-router-dom";

import { AreaDescricaoProduto, AreaImagem, AreaQuantidadeAndTotal, AreaQuantidadeProduto, AreaValorAndQuantidade, BotaoAdicionarCarrinho, Container, Descricao, ProdutoInCarrinho, Titulo, ValorUitarioAndTotal } from "./styles";
import { useContext, useEffect, useState } from "react";

import { ProdutoContext } from "../../contexts/ProdutoContext";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface ProdutoProps {
    imagem: any;
    nome: string;
    descricao: string;
    valor: number;
}

export function Produto() { 
    const { nome_produto } = useParams() 
    const [quantidade, setQuantidade] = useState(0)

    const navigate = useNavigate()
    
    const produtoContext = useContext(ProdutoContext)
    const carrinhoContext = useContext(CarrinhoContext)

    const produtoInCarrinho = carrinhoContext?.produtos.filter((item) => item.nome === nome_produto)

    const [produto, setProduto] = useState<ProdutoProps>()

    const [total, setTotal] = useState(0)

    function handleAumentarQuantidadeItem() {
        setQuantidade(quantidade + 1)
        setTotal(total + Number(produto?.valor))
    }

    function handleDiminuirQuantidadeItem() {
        const quantidadeMinima = 0

        if (quantidade > quantidadeMinima) {
            setQuantidade(quantidade - 1)
            setTotal(total - Number(produto?.valor))
        }
    }

    async function getProduto() {
        const novoProduto = await produtoContext?.produtos.filter(produto => produto.nome == nome_produto)

        let imagem;
        let nome;
        let descricao;
        let valor;

        if (novoProduto) {
            imagem = await novoProduto[0].imagem
            nome = await novoProduto[0].nome
            descricao = await novoProduto[0].descricao
            valor = await novoProduto[0].valor
        }

        setProduto({
            imagem: imagem,
            nome: nome as string,
            descricao: descricao as string,
            valor: valor as number
        })
    }

    useEffect(() => {
        getProduto()
    }, [])

    function voltarPaginaHome() {
        navigate("/")
    }

    function handleAddProdutoCarrinho() {
        carrinhoContext?.addProdutoCarrinho(
            produto?.imagem,
            produto?.nome as string,
            produto?.descricao as string,
            produto?.valor as number,
            quantidade
        )
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                title: <p>Produto adicionado com sucesso!</p>,
                icon: 'success',
            })

            setQuantidade(0)
            voltarPaginaHome()
    }

    return (
        <div>
            <HeaderGoPage />
            <Container>
                <AreaImagem>
                    <img src={produto?.imagem} alt="" />
                </AreaImagem>
                <div>
                    <AreaDescricaoProduto>
                        <Titulo>{produto?.nome.toUpperCase()}</Titulo>
                        <Descricao>{produto?.descricao}</Descricao>
                    </AreaDescricaoProduto>
                    <AreaValorAndQuantidade>
                        <div>
                            <ValorUitarioAndTotal>
                                <strong>Preço unitario: </strong> 
                                {produto?.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                            </ValorUitarioAndTotal>
                        </div>
                        { Number(produtoInCarrinho?.length) < 1 &&  
                            <AreaQuantidadeAndTotal>
                                <AreaQuantidadeProduto>
                                    <button onClick={handleAumentarQuantidadeItem}>+</button>
                                    <span>{quantidade}</span>
                                    <button onClick={handleDiminuirQuantidadeItem}>-</button>
                                </AreaQuantidadeProduto>
                                <div>
                                    <ValorUitarioAndTotal>
                                        <strong>Total:</strong> 
                                        {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                                    </ValorUitarioAndTotal>
                                </div>
                            </AreaQuantidadeAndTotal>
                        }
                    </AreaValorAndQuantidade>
                    { Number(produtoInCarrinho?.length) > 0 && 
                        <ProdutoInCarrinho>Produto já está no carrinho!</ProdutoInCarrinho>
                    } 

                    { quantidade >  0 && 
                        <BotaoAdicionarCarrinho 
                            onClick={handleAddProdutoCarrinho}
                        >
                            ADICIONAR AO CARRINHO
                        </BotaoAdicionarCarrinho>
                    }
                </div>
            </Container>
        </div>
    )
}

