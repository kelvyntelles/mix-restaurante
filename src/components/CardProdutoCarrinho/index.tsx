import { useContext } from "react";
import { 
    AreaDescricao, 
    AreaQuantidadeProduto, 
    AreaValorTotal, 
    AreaValorTotalAndRemoverItem, 
    Container, 
    ContainerDescricaoProduto, 
    DescricaoProduto, 
    Imagem, 
    RemoverItem, 
    Titulo, 
    ValorUitarioAndTotal
} from "./styles";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";

interface Props {
    imagem: any;
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;
}

export function CardProdutoCarrinho({ imagem, nome, descricao, valor, quantidade }: Props) {
    const carrinhoContext = useContext(CarrinhoContext)

    function handleAumentarQuantidadeProdutoCarrinho() {
        carrinhoContext?.aumentarQuantidadeProdutoCarrinho(nome)
    }

    function handleDiminuirQuantidadeProdutoCarrinho() {
        carrinhoContext?.diminuirQuantidadeProdutoCarrinho(nome)
    }

    return (
        <Container>
            <div>
                <Imagem src={imagem} alt="" />
            </div>
            <ContainerDescricaoProduto>
                <AreaDescricao>
                    <Titulo>{ nome.toUpperCase() }</Titulo>
                    <DescricaoProduto>{ descricao }</DescricaoProduto>
                </AreaDescricao>
                <AreaValorTotalAndRemoverItem>
                    <AreaValorTotal>
                        <AreaQuantidadeProduto>
                            <button onClick={handleAumentarQuantidadeProdutoCarrinho}>+</button>
                            <span>{quantidade}</span>
                            <button onClick={handleDiminuirQuantidadeProdutoCarrinho}>-</button>
                        </AreaQuantidadeProduto>
                        <ValorUitarioAndTotal>
                            <strong>Total: </strong> 
                            {(valor * quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </ValorUitarioAndTotal>
                    </AreaValorTotal>
                    <RemoverItem onClick={() => carrinhoContext?.removerProdutoCarrinho(nome)}>
                        remover
                    </RemoverItem>
                </AreaValorTotalAndRemoverItem>
            </ContainerDescricaoProduto>
        </Container>
    )
}