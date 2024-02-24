import styled from "styled-components";

interface Props {
    active: any;
}

export const Container = styled.div<Props>`
    padding: 5px 30px;
    border: 1px solid ${props => props.active == true ? props.theme['red-800'] : props.theme['white']};
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${props => props.active == true ? props.theme['red-800'] : ''};
`

