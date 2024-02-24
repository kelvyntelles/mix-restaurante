import { createContext, useState } from 'react'

// IMG REFEIÇÕES
import feijoada from '../assets/feijoada.png'
import strogonoff from '../assets/strogonoff.jpg'
import fileFrangoGrelhado from '../assets/file-frango-grelhado.jpg'
import bifeAcebolado from '../assets/bife-acebolado.jpg'

// IMG PORÇÕES
import batataQueijo from '../assets/BatataQueijo.jpg'
import fileFritas from '../assets/file-fritas.jpg'
import iscaFrango from '../assets/isca-frango.jpg'
import fileMandioca from '../assets/FileMandioca.jpg'

// IMG CALDOS
import caldoFeijaoAmigo from '../assets/caldo-feijao.jpg'
import caldoVerde from '../assets/caldo-verde.jpg'
import caldoDobradinha from '../assets/caldo-dobradinha.jpg'

// IMG BEBIDAS
import cocaLata from '../assets/coca-cola-lata.jpg'
import guaravitonAcai from '../assets/guaraviton-acai.jpg'
import heinekenLongNeck from '../assets/heineken-long-neck.jpg'

type Produto = {
  imagem: any;
  nome: string;
  descricao: string;
  valor: number;
  tipo: string;
}

interface ProdutosContextType {
  produtos: Produto[];
}

export const ProdutoContext = createContext<ProdutosContextType | undefined>(undefined)

export function ProdutoProvider({children}: any) {
  const [produtos] = useState<Produto[]>([
    // REFEIÇÕES
    {
      imagem: strogonoff,
      nome: 'Strogonoff',
      descricao: 'arroz, batata frita e strogonoff',
      valor: 16.00,
      tipo: 'refeicao'
    },
    {
        imagem: feijoada,
        nome: 'Feijoada',
        descricao: 'arroz, feijoada, farofa e couve',
        valor: 25.00,
        tipo: 'refeicao'
    },
    {
        imagem: fileFrangoGrelhado,
        nome: 'Filé de Frango Grelhado',
        descricao: 'Filé de frando grelhado, arroz, feijão, farofa e salada',
        valor: 19.00,
        tipo: 'refeicao'
    },
    {
        imagem: bifeAcebolado,
        nome: 'Bife Acebolado',
        descricao: 'Bife aceboldado, arroz, feijão, farofa e salada',
        valor: 22.00,
        tipo: 'refeicao'
    },
    // PORÇÕES
    {
        imagem: batataQueijo,
        nome: 'Batata Frita com queijo',
        descricao: 'batata frita com mussarela',
        valor: 29.00,
        tipo: 'porcao'
    },
    {
        imagem: fileFritas,
        nome: 'File com Fritas',
        descricao: 'contra filé acebolado com batata frita',
        valor: 35.00,
        tipo: 'porcao'
    },
    {
        imagem: iscaFrango,
        nome: 'Isca de frango',
        descricao: 'isca de frango empanada',
        valor: 25.00,
        tipo: 'porcao'
    },
    {
      imagem: fileMandioca,
      nome: 'Contrá file com mandioca',
      descricao: 'Contrá file acebolado com mandioca frita',
      valor: 23.90,
      tipo: 'porcao'
  },
    // CALDOS
    {
        imagem: caldoFeijaoAmigo,
        nome: 'Feijão Amigo',
        descricao: '...',
        valor: 15.00,
        tipo: 'caldo'
    },
    {
        imagem: caldoDobradinha,
        nome: 'Dobradinha',
        descricao: '...',
        valor: 15.00,
        tipo: 'caldo'
    },
    {
        imagem: caldoVerde,
        nome: 'Caldo Verde',
        descricao: '...',
        valor: 15.00,
        tipo: 'caldo'
    },
    // BEBIDAS
    {
        imagem: cocaLata,
        nome: 'Coca Cola Lata',
        descricao: '...',
        valor: 5.00,
        tipo: 'bebida'
    },
    {
        imagem: guaravitonAcai,
        nome: 'Guaraviton - Açai',
        descricao: '...',
        valor: 5.00,
        tipo: 'bebida'
    },
    {
        imagem: heinekenLongNeck,
        nome: 'Heineken Long Neck',
        descricao: '...',
        valor: 10.00,
        tipo: 'bebida'
    },
  ])

  return (
    <ProdutoContext.Provider value={{ produtos }}>
      {children}
    </ProdutoContext.Provider>
  )
}
