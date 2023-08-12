import { AppRouter } from "./pages/routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;