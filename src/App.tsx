import { AppRouter } from "./pages/routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #FFF;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b1b1b1;
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