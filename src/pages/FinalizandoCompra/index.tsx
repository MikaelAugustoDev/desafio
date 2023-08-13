import { styled } from "styled-components";
import { Header } from "../../components/header";
import { SetStateAction, useEffect, useState } from "react";
import Arrow from "../../assets/arrow.svg";
import { Input } from "../../components/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  flex-direction: column;
`;

const InputsForm = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
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

  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");

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

  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    const paymentMethodValid = selectedPaymentMethod !== "";
    const addressValid = cep !== "" && rua !== "" && bairro !== "" && numero !== "";

    if (paymentMethodValid && addressValid) {
      if (selectedPaymentMethod === "cartao") {
        setFormValid(parcelas !== "");
      } else {
        setFormValid(true);
      }
    } else {
      setFormValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [cep, rua, bairro, numero, selectedPaymentMethod, parcelas]);

  const handleFinalizarClick = () => {
    if (formValid) {
      const dadosEntrega = {
        cep,
        estadoEntrega,
        cidadeEntrega,
        rua,
        bairro,
        numero
      };
      localStorage.setItem("dadosEntrega", JSON.stringify(dadosEntrega));
      navigate("/finalizado");
    } else {
      alert("Preencha todos os campos obrigatórios antes de finalizar.");
    }
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
                <InputsForm>
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

                      value={rua}
                      onChange={(e: { target: { value: SetStateAction<string>; }; }) => setRua(e.target.value)}
                    />
                    <Input
                      name="Bairro"
                      type="text"
                      value={bairro}
                      onChange={(e: { target: { value: SetStateAction<string>; }; }) => setBairro(e.target.value)}
                    />
                    <Input
                      name="Numero"
                      type="text"
                      
                      value={numero}
                      onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNumero(e.target.value)}
                    />
                  </CadastrarLogradouro>
                </InputsForm>
                <CustomButton
                  type="submit"
                  onClick={handleFinalizarClick}
                  disabled={!formValid}
                >Finalizar</CustomButton>
              </FormEntrega>

            </FormularioEntrega>
          </>
        )}
      </Main>
    </>
  );
};

export { FinalizandoCompra };
