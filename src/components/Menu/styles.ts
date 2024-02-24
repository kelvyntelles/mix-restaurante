import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme['red-800']};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 0;
    
    position: fixed;
    bottom: 0;
    width: 100%;
`

export const IconeNavegacao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
`
