import { styled } from "styled-components";
import { Header } from "../../components/header";
import { useState } from "react";

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

const FinalizandoCompra = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [parcelas, setParcelas] = useState("");

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
    setParcelas(""); // Limpa o valor de parcelas ao trocar a forma de pagamento
  };

  return (
    <>
      <Header />
      <Main>
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
                    placeholder="Parcelas"
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
        </Formulario>
      </Main>
    </>
  );
};

export { FinalizandoCompra };
