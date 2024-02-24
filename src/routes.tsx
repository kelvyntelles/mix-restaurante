import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Produto } from './pages/Produto'
import { Carrinho } from './pages/Carrinho'

export function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produto/:nome_produto' element={<Produto />} />
        <Route path='/carrinho' element={<Carrinho />} />
    </Routes>
  )
}


