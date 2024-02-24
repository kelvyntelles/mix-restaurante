import styled from "styled-components";

export const Container = styled.div``

export const AreaImagem = styled.div`

    img {
        border-radius: 5px;
        width: 100%;
        max-height: 190px;
        object-fit: cover;
    }
`

export const AreaDescricaoProduto = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const Titulo = styled.span`
    font-size: 18px;
    font-weight: bold;
`

export const Descricao = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme['zinc-700']};
`

export const AreaValorAndQuantidade = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const ValorUitarioAndTotal = styled.span`
    font-size: 16px;

    strong {
        color: ${(props) => props.theme['red-700']};
    }
`

export const AreaQuantidadeAndTotal = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 10px;
`

export const AreaQuantidadeProduto = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;

    button {
        background-color: ${(props) => props.theme['red-800']};
        color: ${(props) => props.theme['white']};
        border: none;
        border-radius: 100%;
        overflow: hidden;
        height: 20px;
        width:20px;
        font-weight: bold;
        font-size: 14px;
    }

    span {
        font-size: 14px;
        font-weight: bold;
    }
`

export const BotaoAdicionarCarrinho = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: ${(props) => props.theme['red-800']};
    color: ${(props) => props.theme['white']};
    border: none;
    font-weight: bold;
`

export const ProdutoInCarrinho = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
`
