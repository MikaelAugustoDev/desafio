import styled from "styled-components";
import { Input } from "../../components/input";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormularioDeLogin = styled.div`
  width: 400px;
  height: 500px;
  border: 2px solid #333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
  gap: 15px;

  @media (max-width: 425px) {
    width: 300px;
    height: 450px;
  }
`;

const TitleFormulario = styled.h1`
  font-size: 30px;
  color: #333;
`;

const Form = styled.form`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonEntrar = styled.button`
  width: 250px;
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
`;

const ErrorMessage = styled.span`
  color: #FF0000;
  margin-top: 10px;
  font-weight: 500;
`;

const FormularioLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "teste@gmail.com" && password === "1234") {
      navigate("/home");
      setErrorMessage("");
    } else {
      setErrorMessage("Usuario ou senha incorretos");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Main>
        <FormularioDeLogin>
          <TitleFormulario>Entrar</TitleFormulario>
          <Form onSubmit={handleFormSubmit} noValidate>
            <Input
              name="Email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              name="Senha"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <ButtonEntrar type="submit">Entrar</ButtonEntrar>
          </Form>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FormularioDeLogin>
      </Main>
    </>
  );
};

export { FormularioLogin };