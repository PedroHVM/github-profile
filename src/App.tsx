import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { Form } from "./components/Form"
import { LayoutContainer } from "./layout/DefaultLayout/styles"
import { Profile } from "./components/Profile"
import { UserContextProvider } from "./contexts/User"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserContextProvider>
        <LayoutContainer>
          <h1>Github Profile</h1>
          <Form />
          <Profile />
        </LayoutContainer>
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App
