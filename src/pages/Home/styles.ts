import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 35px;
`

export const AreaLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme['red-800']};
    color: ${(props) => props.theme['white']};
    border-radius: 100%;
    overflow: hidden;
    height: 50px;
    width:50px;
    margin-right: 5px;

    span {
        font-size: 23px;
        font-weight: bold;
    }

`

export const TextoLogo = styled.span`
    font-size: 14px;
    font-weight: bold;
`

export const AreaCidade = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
`

export const OpcoesAlimento = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    overflow: auto; 
    padding: 15px 0;
`
export const AreaProdutos = styled.div`
    margin-top: 20px;
    margin-bottom: 100px;
`

