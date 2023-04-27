import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from "./styles/themes/default";
import { Router } from "./styles/themes/Router";

import { BrowserRouter } from 'react-router-dom'
export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>

  )
}

