import { createContext, useState } from 'react'

type Produto = {
  imagem: any;
  nome: string;
  descricao: string;
  valor: number;
  quantidade: number;
}

interface CarrinhoContextType {
  produtos: Produto[];
  addProdutoCarrinho: (
        imagem: any, 
        nome: string, 
        descricao: string, 
        valor: number,
        quantidade: number
    ) => void;
    valorTotalProdutos: () => number;
    removerProdutoCarrinho: (nomeProduto: string) => void;
    aumentarQuantidadeProdutoCarrinho: (nomeProduto: string) => void;
    diminuirQuantidadeProdutoCarrinho: (nomeProduto: string) => void;
}

export const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined)

export function CarrinhoProvider({children}: any) {
    const [produtos, setProdutos] = useState<Produto[]>([])

    function addProdutoCarrinho(
            imagem: any, 
            nome: string, 
            descricao: string, 
            valor: number,
            quantidade: number
        ) {
            const newProduto = {
                imagem,
                nome,
                descricao,
                valor,
                quantidade
            }

            setProdutos([...produtos, newProduto])
    }

    function valorTotalProdutos() {
        let total = 0

        for(let i = 0; i < produtos.length; i++) {
            const valorProduto = (produtos[i].valor * produtos[i].quantidade)
            total += valorProduto
        }

        return total
    }

    function removerProdutoCarrinho(nomeProduto: string) {
        const produtoInCarrinho = produtos.filter((item) => item.nome === nomeProduto)

        if (produtoInCarrinho.length > 0) {
            const novaListaProdutos = produtos.filter((item) => item.nome != nomeProduto)
            setProdutos(novaListaProdutos)
        } else {
            console.log('produto não encontrado')
        }
    }

    function aumentarQuantidadeProdutoCarrinho(nomeProduto: string) {
        const produtoInCarrinho = produtos.filter((item) => item.nome === nomeProduto)
        if (produtoInCarrinho.length > 0) {
            const novoCarrinho = produtos.map(produto => {
                if (produto.nome === nomeProduto) {
                    return {...produto, quantidade: produto.quantidade + 1}
                }
                return produto
            })

            setProdutos(novoCarrinho)
        } else {
            console.log('produto não encontrado')
        }
    }

    function diminuirQuantidadeProdutoCarrinho(nomeProduto: string) {
        const produtoInCarrinho = produtos.filter((item) => item.nome === nomeProduto)
        if (produtoInCarrinho.length > 0) {
            const novoCarrinho = produtos.map(produto => {
                if (produto.nome === nomeProduto) {
                    if (produto.quantidade > 1) {
                        return {...produto, quantidade: produto.quantidade - 1}
                    }
                    return produto
                }
                return produto
            })

            setProdutos(novoCarrinho)
        } else {
            console.log('produto não encontrado')
        }
    }

    return (
        <CarrinhoContext.Provider value={{ 
            produtos, 
            addProdutoCarrinho, 
            valorTotalProdutos ,
            removerProdutoCarrinho,
            aumentarQuantidadeProdutoCarrinho,
            diminuirQuantidadeProdutoCarrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}
