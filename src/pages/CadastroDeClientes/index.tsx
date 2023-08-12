import { styled } from "styled-components";
import { Input } from "../../components/input";
import { ChangeEvent, useState } from "react";
import { Header } from "../../components/header";

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

const Formulario = styled.div`
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

const TitleFormulario = styled.h1`
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

const DivInputs = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const ButtonCadastrar = styled.button`
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

const CadastroDeClientes = () => {
  
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [email, setEmail] = useState("");

  const handleCodigoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCodigo(e.target.value);
  };

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleCpfCnpjChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCpfCnpj(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCadastrar = () => {
    
    localStorage.setItem("clienteCodigo", codigo);
    localStorage.setItem("clienteNome", nome);
    localStorage.setItem("clienteCpfCnpj", cpfCnpj);
    localStorage.setItem("clienteEmail", email);

    alert("Cliente cadastrado com sucesso!");
  };
  
  return (
    <>
      <Header/>
      <Main>
        <Formulario>
          <TitleFormulario>Cadastrar Cliente</TitleFormulario>
          <Form>
            <DivInputs>
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
            </DivInputs>
            <DivInputs>
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
            </DivInputs>
            <ButtonCadastrar onClick={handleCadastrar}>Cadastrar</ButtonCadastrar>
          </Form>
        </Formulario>
      </Main>
    </>
  );
};

export { CadastroDeClientes };