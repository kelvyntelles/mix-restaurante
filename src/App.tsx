import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default';

import { Menu } from "./components/Menu";
import { Container } from './AppStyles';
import { ProdutoProvider } from './contexts/ProdutoContext';
import { CarrinhoProvider } from './contexts/CarrinhoContext';

export function App() {
  return (
    <BrowserRouter>
      <ProdutoProvider>
        <CarrinhoProvider>
          <ThemeProvider theme={defaultTheme}>
            <Container>
              <AppRoutes />
            </Container>
            <Menu />
          </ThemeProvider>
        </CarrinhoProvider>
      </ProdutoProvider>
    </BrowserRouter>
  )
}


