import { styled } from "styled-components";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { ChangeEvent, useState } from "react";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    height: 800px;
    margin: 40px 0px;
  }
  
  @media (max-width: 375px) {
    width: 320px;
    height: 800px;
  }
  @media (max-width: 320px) {
    width: 300px;
    height: 800px;
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
  align-items: center;
  flex-direction: column;
`;

const DivInfomations = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const DivInputs = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const DescricaoDoProduto = styled.textarea`
  width: 50%;
  height: 250px;
  padding: 10px;
  font-size: 15px;
  font-weight: 500;

  &:focus {
    outline: none;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
  
  @media (max-width: 375px) {
    width: 100%;
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

const CadastroDeProdutos = () => {

  const [codigo, setCodigo] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleCodigoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCodigo(e.target.value);
  };

  const handlePrecoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPreco(e.target.value);
  };

  const handleQuantidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantidade(e.target.value);
  };

  const handleDescricaoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescricao(e.target.value);
  };

  const handleCadastrar = () => {
    localStorage.setItem("produtoCodigo", codigo);
    localStorage.setItem("produtoPreco", preco);
    localStorage.setItem("produtoQuantidade", quantidade);
    localStorage.setItem("produtoDescricao", descricao);

    alert("Produto Cadastrado com sucesso!");
  };

  return (
    <>
      <Header/>
      <Main>
        <Formulario>
          <TitleFormulario>Cadastre seu Produto</TitleFormulario>
          <Form>
            <DivInfomations>
              <DivInputs>
                <Input
                  name="Código"
                  type="text"
                  onChange={handleCodigoChange}
                />
                <Input
                  name="Preço"
                  type="text"
                  onChange={handlePrecoChange}
                />
                <Input
                  name="Quantidade em estoque"
                  type="text"
                  onChange={handleQuantidadeChange}
                  
                />
              </DivInputs>
              <DescricaoDoProduto 
                placeholder="Descrição do Produto"
                onChange={handleDescricaoChange}
              />
            </DivInfomations>
            <ButtonCadastrar onClick={handleCadastrar}>Cadastrar Produto</ButtonCadastrar>
          </Form>
        </Formulario>
      </Main>
    </>
  );
};

export { CadastroDeProdutos };