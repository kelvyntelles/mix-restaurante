import { CaretLeft } from "phosphor-react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export function HeaderGoPage() {
    return (
        <Link to="/">
            <Container>
                <CaretLeft size={24} />
                <span>MIX Restaurante</span>
            </Container>
        </Link>
    )
}
