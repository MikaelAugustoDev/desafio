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

const FormView = styled.div`
  width: 700px;
  height: 550px;
  border: 2px solid #333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  gap: 15px;

  @media (max-width: 425px) {
    width: 400px;
    height: 900px;
    margin: 40px 0px;
  }
  
  @media (max-width: 375px) {
    width: 320px;
  }
  @media (max-width: 320px) {
    width: 300px;
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
  align-items: center;
  flex-direction: column;
`;

const Infomations = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Inputs = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const ProductDescription = styled.textarea`
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
  margin-top: 50px;
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

const ProductCode = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 30px;

  @media (max-width: 425px) {
    margin: 20px 30px;
  }

  @media (max-width: 375px) {
    margin: 20px 0px;
  }
`;

const LabelProduct = styled.label`
  font-size: 16px;
  color: #333;
`;

const InputCheckbox = styled.input`
  margin-right: 8px;
`;

const CadastroDeProdutos = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePrecoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleQuantidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  const handleDescricaoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleEstaAtivoChange = () => {
    setIsActive(!isActive);
  };


  const handleCadastrar = () => {
    const productData = {
      name: name,
      description: description,
      price: price,
      stock: quantity,
      isActive: isActive
    };
  
    localStorage.setItem("registeredProduct", JSON.stringify(productData));
    alert("Produto Cadastrado com sucesso!");
  };

  return (
    <>
      <Header/>
      <Main>
        <FormView>
          <TitleForm>Cadastre seu Produto</TitleForm>
          <Form>
            <Infomations>
              <Inputs>
                <Input
                  name="Nome do Produto"
                  type="text"
                  onChange={handleNameChange}
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
                <ProductCode>
                  <InputCheckbox
                    type="checkbox"
                    id="check"
                    checked={isActive}
                    onChange={handleEstaAtivoChange}
                  />
                  <LabelProduct htmlFor="check">O código está ativo?</LabelProduct>
                </ProductCode>
              </Inputs>
              <ProductDescription 
                placeholder="Descrição do Produto"
                onChange={handleDescricaoChange}
                maxLength={130}
              />
            </Infomations>
            <RegisterButton onClick={handleCadastrar}>Cadastrar Produto</RegisterButton>
          </Form>
        </FormView>
      </Main>
    </>
  );
};

export { CadastroDeProdutos };