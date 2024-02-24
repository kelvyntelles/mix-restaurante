import { House, ShoppingCartSimple } from "phosphor-react";
import { Container, IconeNavegacao } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";

export function Menu() {
    const carrinhoContext = useContext(CarrinhoContext)

    return (
        <Container>
            <Link to="/">
                <IconeNavegacao>
                    <House size={24} />
                    <span>Home</span>
                </IconeNavegacao>
            </Link>
            <Link to="/carrinho">
                <IconeNavegacao>
                    <ShoppingCartSimple size={24} />
                    <span>Carrinho - {carrinhoContext?.produtos.length}</span>
                </IconeNavegacao>
            </Link>
        </Container>
    )
}
