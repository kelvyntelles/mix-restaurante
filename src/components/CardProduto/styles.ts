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

export const DescricaoProduto = styled.span`
    font-size: 12px;
    color: ${(props) => props.theme['zinc-700']};
`

export const Valor = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme['red-700']};
`



