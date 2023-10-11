import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { Form } from "./components/Form"
import { LayoutContainer } from "./layout/DefaultLayout/styles"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LayoutContainer>
        <h1>Github Profile</h1>
        <Form />
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default App
