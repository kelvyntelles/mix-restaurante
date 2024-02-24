import { AreaDescricao, Container, ContainerDescricaoProduto, DescricaoProduto, Imagem, Titulo, Valor } from "./styles";

interface Props {
    imagem: any;
    nome: string;
    descricao: string;
    valor: number;
}

export function CardProduto({ imagem, nome, descricao, valor }: Props) {
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
                <div>
                    <Valor>
                        {valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </Valor>
                </div>
            </ContainerDescricaoProduto>
        </Container>
    )
}