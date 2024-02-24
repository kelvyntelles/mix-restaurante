import styled from "styled-components";

export const AreaValorPedido = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 5px;

    strong {
        color: ${(props) => props.theme['red-700']};
        font-weight: bold;
    }

    span {

    }
`

export const CarrinhoVazio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

