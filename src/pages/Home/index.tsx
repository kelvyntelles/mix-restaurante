import { MapPin } from "phosphor-react";
import { AreaCidade, AreaLogo, AreaProdutos, ContainerHeader, Logo, OpcoesAlimento, TextoLogo } from "./styles";
import { CardOpcaoAlimento } from "../../components/CardOpcaoAlimento";
import { CardProduto } from "../../components/CardProduto";
import { useEffect, useState, useContext } from "react";
import { ProdutoContext } from "../../contexts/ProdutoContext";
import { Link } from "react-router-dom";

interface ProdutoProps {
    imagem: any;
    nome: string;
    descricao: string;
    valor: number;
    tipo: string;
}

export function Home() {
    const produtosContext = useContext(ProdutoContext)

    const [rotaAtiva, setRotaAtiva] = useState('refeicao')
    const [produtos, setProdutos] = useState<ProdutoProps[] | undefined>([])

    function alterarRotaAtiva(rota: string) {
        setRotaAtiva(rota)
    }

    useEffect(() => {
        const listaProdutos = produtosContext?.produtos.filter(produto => produto.tipo === rotaAtiva)
        setProdutos(listaProdutos)
    }, [rotaAtiva])

    return (
        <>
            <ContainerHeader>
                <AreaLogo>
                    <Logo>
                        <span>M</span>
                    </Logo>
                    <TextoLogo>MIX Restaurante</TextoLogo>
                </AreaLogo>
                <AreaCidade>
                    <TextoLogo>Vassouras/RJ</TextoLogo>
                    <MapPin size={20} color="#991B1B" />
                </AreaCidade>
            </ContainerHeader>
            <div>
                <h2>Opções</h2>
                <OpcoesAlimento>
                    <CardOpcaoAlimento 
                        active={rotaAtiva == 'refeicao' ? true : false}
                        alimento="Refeição" 
                        onClick={() => alterarRotaAtiva('refeicao')}
                    />
                    <CardOpcaoAlimento
                        active={rotaAtiva == 'porcao' ? true : false} 
                        alimento="Porção" 
                        onClick={() => alterarRotaAtiva('porcao')}
                    />
                    <CardOpcaoAlimento
                        active={rotaAtiva == 'caldo' ? true : false} 
                        alimento="Caldo" 
                        onClick={() => alterarRotaAtiva('caldo')}
                    />
                    <CardOpcaoAlimento
                        active={rotaAtiva == 'bebida' ? true : false} 
                        alimento="Bebida" 
                        onClick={() => alterarRotaAtiva('bebida')}
                    />
                </OpcoesAlimento>
            </div>
            <AreaProdutos>
                { produtos?.map( (produto) => 
                    <Link to={`/produto/${produto.nome}`}>
                        <CardProduto 
                            key={produto.nome}
                            imagem={produto.imagem}
                            nome={produto.nome} 
                            descricao={produto.descricao} 
                            valor={produto.valor}
                        />
                    </Link>
                )}
            </AreaProdutos>
        </>
    )
}
