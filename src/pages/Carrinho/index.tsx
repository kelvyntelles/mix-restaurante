import { CardProdutoCarrinho } from "../../components/CardProdutoCarrinho";
import { HeaderGoPage } from "../../components/HeaderGoPage";

import { AreaValorPedido, CarrinhoVazio } from "./styles";
import { ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";

export function Carrinho() {
    const carrinhoContext = useContext(CarrinhoContext)
    const totalItensCarrinho = carrinhoContext?.produtos.length as number

    const valorTaxaEntrega = 5

    function valorTotalPedido() {
        const valorTotalProduto = carrinhoContext?.valorTotalProdutos()
        const valorTotalPedido = Number(valorTotalProduto) + valorTaxaEntrega

        return valorTotalPedido
    }

    return (
        <div>
            <HeaderGoPage />
            
            { totalItensCarrinho > 0 ? 
                <div>
                    <div>
                    { carrinhoContext?.produtos?.map( (produto) => 
                        <CardProdutoCarrinho 
                            key={produto.nome}
                            imagem={produto.imagem} 
                            nome={produto.nome}
                            descricao={produto.descricao}
                            valor={produto.valor}
                            quantidade={produto.quantidade}
                        />
                    )} 
                    </div>
                    <div>
                        <AreaValorPedido>
                            <strong>Taxa de entrega:</strong>
                            <span>
                                {valorTaxaEntrega.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                            </span>
                        </AreaValorPedido>
                        <AreaValorPedido>
                            <strong>Total do pedido:</strong>
                            <span>{valorTotalPedido().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                        </AreaValorPedido>
                    </div> 
                </div>
            : 
                <CarrinhoVazio>
                    <h2>Carrinho está vazio.</h2> 
                    <ShoppingCartSimple size={60} />   
                </CarrinhoVazio> 
            }
        </div>
    )
}


