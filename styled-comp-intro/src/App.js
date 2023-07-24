import { Button, DarkButton } from "./components/Buton.styled"
import Flex from "./components/Flex"
import StyledLink from "./components/Links"
import Title from "./components/Title"

const App = () => {
  return (
    <>
      <Flex bg="#bebe">
        <Title renk="white" bgColor="red">
        Styled Components
        </Title>
        <Button>Tikla</Button>
        <DarkButton>Send</DarkButton>
      </Flex>

      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>

      <Flex>
        <StyledLink a href="https://bonna.com.tr">Bonna
        </StyledLink>
      </Flex>
    </>
  )
}

export default App
