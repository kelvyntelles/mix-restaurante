import { Container } from "./styles";

interface Props {
    alimento: string;
    onClick: any;
    active: boolean;
}

export function CardOpcaoAlimento({ alimento, onClick, active }: Props) {
    return (
        <Container onClick={onClick} active={active}>
            {alimento}
        </Container>
    )
}


