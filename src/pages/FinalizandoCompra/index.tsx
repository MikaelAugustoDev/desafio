import { styled } from "styled-components";
import { Header } from "../../components/header";
import { SetStateAction, useState } from "react";
import Arrow from "../../assets/arrow.svg";
import { Input } from "../../components/input";
import axios from "axios";

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
  height: 400px;
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
  align-items: center;
`;

const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelForPayment = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

const InputPayment = styled.input`
  margin-right: 5px;
`;

const InputParcelas = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const CustomInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;


const CustomButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  opacity: ${props => props.disabled ? 0.5 : 1};
  transition: opacity 0.3s ease;

  &:hover {
    background-color: ${props => props.disabled ? "#333" : "#555"};
  }
`;

const ArrowGoBack = styled.img`
    position: absolute;
    width: 30px;
    left: 10%;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 425px) {
        top: 22%;
        left: 5%;
    }
`;

const FormularioEntrega = styled.div`
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

const FormEntrega = styled.form`
  width: 100%;
  display: flex;
`;

const CadastrarCEP = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CadastrarLogradouro = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FinalizandoCompra = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [parcelas, setParcelas] = useState("");
  const [continueButtonEnabled, setContinueButtonEnabled] = useState(false);

  const handlePaymentMethodChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedPaymentMethod(e.target.value);
    setParcelas("");
    setContinueButtonEnabled(true);
  };

  const [showForm, setShowForm] = useState(true);
  const [previousSelectedMethod, setPreviousSelectedMethod] = useState("");

  const handleContinueClick = () => {
    setShowForm(false);
    setPreviousSelectedMethod(selectedPaymentMethod);
  };

  const handleBackClick = () => {
    setShowForm(true);
    setSelectedPaymentMethod(previousSelectedMethod);
  };

  const [cep, setCep] = useState("");
  const [estadoEntrega, setEstadoEntrega] = useState("");
  const [cidadeEntrega, setCidadeEntrega] = useState("");

  const handleCepChange = (e: { target: { value: string; }; }) => {
    const newCep = e.target.value;
    setCep(newCep);

    if (newCep.length === 8) {
      fetchCepDetails(newCep);
    }
  };

  const fetchCepDetails = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
  
      if (!data.erro) {
        setEstadoEntrega(data.uf);
        setCidadeEntrega(data.localidade);
      }
    } catch (error) {
      alert("Erro ao obter detalhes do CEP");
    }
  };
  
  const handleFinalizarClick = () => {
    // Salve os dados no localStorage antes de redirecionar
    const dadosEntrega = {
      cep,
      estadoEntrega,
      cidadeEntrega,
      // outros campos de entrega que você queira salvar
    };
    localStorage.setItem("dadosEntrega", JSON.stringify(dadosEntrega));
  };

  return (
    <>
      <Header />
      <Main>
        {showForm ? (
          <Formulario>
            <TitleFormulario>Quase lá...</TitleFormulario>
            <Form>
              <PaymentMethod>
                <LabelForPayment>Forma de Pagamento:</LabelForPayment>
                <div>
                  <InputPayment
                    type="radio"
                    id="cartao"
                    name="paymentMethod"
                    value="cartao"
                    onChange={handlePaymentMethodChange}
                  />
                  <LabelForPayment htmlFor="cartao">Cartão</LabelForPayment>
                </div>
                {selectedPaymentMethod === "cartao" && (
                  <>
                    <LabelForPayment>Parcelas:</LabelForPayment>
                    <InputParcelas
                      placeholder="1x"
                      list="parcelas"
                      value={parcelas}
                      onChange={(e) => setParcelas(e.target.value)}
                    />
                    <datalist id="parcelas">
                      <option value="1x" />
                      <option value="2x" />
                      <option value="3x" />
                      <option value="4x" />
                      <option value="5x" />
                      <option value="6x" />
                      <option value="7x" />
                      <option value="8x" />
                      <option value="9x" />
                      <option value="10x" />
                      <option value="11x" />
                      <option value="12x" />
                    </datalist>
                  </>
                )}

                <div>
                  <InputPayment
                    type="radio"
                    id="dinheiro"
                    name="paymentMethod"
                    value="dinheiro"
                    onChange={handlePaymentMethodChange}
                  />
                  <LabelForPayment htmlFor="dinheiro">Dinheiro</LabelForPayment>
                </div>

                <div>
                  <InputPayment
                    type="radio"
                    id="outro"
                    name="paymentMethod"
                    value="outro"
                    onChange={handlePaymentMethodChange}
                  />
                  <LabelForPayment htmlFor="outro">Outro</LabelForPayment>
                </div>
                {selectedPaymentMethod === "outro" && (
                  <CustomInput
                    type="text"
                    placeholder="Digite a forma de pagamento"
                  />
                )}
              </PaymentMethod>
            </Form>
            <CustomButton
              disabled={!continueButtonEnabled}
              onClick={handleContinueClick}
            >
              Continuar
            </CustomButton>
          </Formulario>
        ) : (
          <>
            <ArrowGoBack 
              src={Arrow}
              alt="Voltar para pagina anterior"
              onClick={handleBackClick}
            />
            <FormularioEntrega>
              <TitleFormulario>Endereço para entrega</TitleFormulario>
              <FormEntrega>
                <CadastrarCEP>
                  <Input
                    name="CEP"
                    type="text"
                    value={cep}
                    onChange={handleCepChange}
                    maxLength={8}
                  />
                  <Input
                    type="text"
                    name=""
                    value={estadoEntrega}
                    readonly
                    placeholder="Estado"
                  />
                  <Input
                    type="text"
                    name=""
                    value={cidadeEntrega}
                    readonly
                    placeholder="Cidade"
                  />
                </CadastrarCEP>
                <CadastrarLogradouro>
                  <Input 
                    name="Rua"
                    type="text"
                  />
                  <Input 
                    name="Bairro"
                    type="text"
                  />
                  <Input 
                    name="Numero"
                    type="text"
                  />
                </CadastrarLogradouro>
              </FormEntrega>
              <CustomButton
                onClick={handleFinalizarClick}
              >Finalizar</CustomButton>
            </FormularioEntrega>
          </>
        )}
      </Main>
    </>
  );
};

export { FinalizandoCompra };
