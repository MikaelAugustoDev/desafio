import { styled } from "styled-components";
import { Header } from "../../components/header";

const Main = styled.main`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const HireMePlease = styled.h1`
  color: #333;
  font-size: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <HireMePlease>Olá, me chamo Mikael e este é o desafio que me mandaram! Espero que achem um bom projeto e me contratem, desde já agradeço e estou aguardando ansiosamente pela resposta!</HireMePlease>
      </Main>
    </>
  );
};

export { Home };