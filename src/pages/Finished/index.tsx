import { styled } from "styled-components";
import { Header } from "../../components/header";
import { useNavigate } from "react-router-dom";

// Estilização em Styled-Components

const Main = styled.main`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    padding: 10px;
  }
`;

const InformationScreen = styled.div`
  width: 40%;
  height: 400px;
  border: 2px solid #333;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 60%;
    height: 450px;
    margin: 20px 0px;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 450px;
    margin: 20px 0px;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

const ProductData = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const PaymentMethod = styled.div`
  width: 200px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PriceTotal = styled.h4`
  color: #333;
  font-size: 24px;
  font-weight: 500;
`;

const Payment = styled.p`
  display: flex;
  gap: 10px;
  color: #333;
  font-size: 20px;
  font-weight: 400;
`;

const DeliveryDate = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShippingInformation = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;

const BackButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #FFF;
  border: 1px solid #333;
  cursor: pointer;
`;

const ProductName = styled.h2`
  text-transform: capitalize;
  color: #333;
  font-size: 30px;
  font-weight: 400;
`;

const TitleDelivery = styled.h3`
  color: #333;
  font-size: 30px;
  font-weight: 400;

`;

const CEP = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Streeat = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  color: #333;
  font-size: 15px;
  font-weight: 700;
`;

const Span = styled.span`
  color: #444;
  font-size: 15px;
  font-weight: 600;
`;

const Finished = () => {

  // Pegando todos os dados para imprimir na tela

  const DeliveryDataString = localStorage.getItem("deliveryData");
  const DeliveryData = DeliveryDataString ? JSON.parse(DeliveryDataString) : {};
  const selectedPaymentMethod = localStorage.getItem("selectedPaymentMethod");
  const selectedParcelas = localStorage.getItem("selectedParcelas");
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct") || "null");
  const selectedOutro = localStorage.getItem("selectedOutro");

  const navigate = useNavigate();

  // Lógica para voltar para a pagina inicial

  const handleButton = () => {
    navigate("/home");
  };

  return (
    <>  
      <Header />
      <Main>
        <InformationScreen>
          <Title>Compra realizada com sucesso!</Title>
          <ProductData>
            <ProductName>{selectedProduct?.name}</ProductName>
            <PaymentMethod>
              <PriceTotal>R${selectedProduct?.price}</PriceTotal>
              <Payment> {selectedPaymentMethod === "cartao" && <P> em {selectedParcelas} no cartão</P> || selectedPaymentMethod === "dinheiro" && <P> em {selectedPaymentMethod}</P> || selectedPaymentMethod === "outro" && <P> com {selectedOutro}</P>}</Payment>
            </PaymentMethod>
          </ProductData>
          <DeliveryDate>
            <TitleDelivery>Pedido enviado</TitleDelivery>
            <ShippingInformation>
              <CEP>
                <P>{DeliveryData.cep}</P>
                <Span>{DeliveryData.estadoEntrega}</Span>
                <Span>{DeliveryData.cidadeEntrega}</Span>
              </CEP>
              <Streeat>
                <P>Rua <Span>{DeliveryData.rua}</Span></P>
                <P>Bairro <Span>{DeliveryData.bairro}</Span></P>
                <P>N° <Span>{DeliveryData.numero}</Span></P>
              </Streeat>
            </ShippingInformation>
          </DeliveryDate>
          <BackButton onClick={handleButton}>Voltar a pagina principal</BackButton>
        </InformationScreen>
      </Main>
    </>
  );
};

export { Finished };