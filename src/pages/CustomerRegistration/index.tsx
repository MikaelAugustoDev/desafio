import { styled } from "styled-components";
import { Input } from "../../components/input";
import { ChangeEvent, useState } from "react";
import { Header } from "../../components/header";

// Estilização em Styled-Components

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    padding: 30px;
  }
`;

const FormView = styled.div`
  width: 700px;
  height: 500px;
  border: 2px solid #333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  gap: 15px;

  @media (max-width: 425px) {
    width: 400px;
    height: 600px;
  }
  
  @media (max-width: 375px) {
    width: 320px;
    height: 600px;
  }

  @media (max-width: 320px) {
    width: 300px;
    height: 650px;
    padding: 60px 20px;
  }
`;

const TitleForm = styled.h1`
  font-size: 30px;
  color: #333;

  @media (max-width: 375px) {
    font-size: 26px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inputs = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const RegisterButton = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  outline: none;
  background-color: #6c5ce7;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  margin-top: 20px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #a29bfe;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 0px 0px 0px 0px #a29bfe;
  }


  @media (max-width: 425px) {
    width: 250px;
  }
`;

const CustomerRegistration = () => {
  
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [email, setEmail] = useState("");

  // Pegando as informações digitadas nos inputs

  const handleCodigoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCpfCnpjChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCpfCnpj(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Salvando as informações em "cache persistente"

  const handleCadastrar = () => {
    const dadosDoCliente = {
      code: code,
      name: name,
      cpfCnpj: cpfCnpj,
      email: email
    };
  
    localStorage.setItem("registeredCustomer", JSON.stringify(dadosDoCliente));
    alert("Cliente Cadastrado com sucesso!");
  };
  
  return (
    <>
      <Header/>
      <Main>
        <FormView>
          <TitleForm>Cadastrar Cliente</TitleForm>
          <Form>
            <Inputs>
              <Input
                name="Código"
                type="text"
                onChange={handleCodigoChange}
              />
              <Input
                name="Nome"
                type="text"
                onChange={handleNomeChange}
              />
            </Inputs>
            <Inputs>
              <Input
                name="CPF/CNPJ"
                type="text"
                onChange={handleCpfCnpjChange}
              />
              <Input
                name="Email"
                type="text"
                onChange={handleEmailChange}
              />
            </Inputs>
            <RegisterButton onClick={handleCadastrar}>Cadastrar</RegisterButton>
          </Form>
        </FormView>
      </Main>
    </>
  );
};

export { CustomerRegistration };