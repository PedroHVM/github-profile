import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { Form } from "./components/Form"
import { LayoutContainer } from "./layout/DefaultLayout/styles"
import { Profile } from "./components/Profile"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LayoutContainer>
        <h1>Github Profile</h1>
        <Form />
        <Profile />
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default App
