import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import HeaderStyled from "./components/styled/HeaderStyled";
import { ThemeProvider } from "styled-components";


const App = () => {

  const styles = {
    colors:{
      primary:"#bebe",
      secondary:"#eee"
    },
    breakpoints:{xs:"300px",sm:"500px"}
  }

  return (
    <ThemeProvider theme={styles}>
    <GlobalStyles/>

    <Container>
    <Nav/>
    <Header/>
    </Container>
    
    </ThemeProvider>
  );
};

export default App;
