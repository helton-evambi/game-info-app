import { GlobalStyle } from './styles/styles.global'
import { theme } from './assets/themes/Themes'
import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
