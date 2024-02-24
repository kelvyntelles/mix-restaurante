import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0 0 5px 0;
    border-bottom: 1px solid #fff;
    margin-bottom: 20px;
`

export const Imagem = styled.img`
    width: 108px;
    height: 104px;
    border-radius: 5px;
    object-fit: cover;
`

export const ContainerDescricaoProduto = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AreaDescricao = styled.div`
    display: flex;
    flex-direction: column;
`

export const Titulo = styled.span`
    font-size: 14px;
    font-weight: bold;
`

export const AreaQuantidadeProduto = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
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

export const ValorUitarioAndTotal = styled.span`
    font-size: 16px;

    strong {
        color: ${(props) => props.theme['red-700']};
    }
`

export const DescricaoProduto = styled.span`
    font-size: 12px;
    color: ${(props) => props.theme['zinc-700']};
`

export const AreaValorTotalAndRemoverItem = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AreaValorTotal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const RemoverItem = styled.button`
    height: 20px;
    padding: 0 10px;
    background-color: ${(props) => props.theme['red-800']};
    color: ${(props) => props.theme['white']};
    border-radius: 10px;
    font-weight: bold;
    border: none;
`




