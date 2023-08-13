import { styled } from "styled-components";
import { Header } from "../../components/header";
import { useNavigate } from "react-router-dom";

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

const TelaDeInformacoes = styled.div`
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

const DadosProduto = styled.div`
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

const DadosEntrega = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoEnvio = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;

const ButtonVoltar = styled.button`
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

const TitleEntrega = styled.h3`
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

const Finalizado = () => {

  const dadosEntregaString = localStorage.getItem("dadosEntrega");
  const dadosEntrega = dadosEntregaString ? JSON.parse(dadosEntregaString) : {};
  const selectedPaymentMethod = localStorage.getItem("selectedPaymentMethod");
  const selectedParcelas = localStorage.getItem("selectedParcelas");
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct") || "null");
  const selectedOutro = localStorage.getItem("selectedOutro");

  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/home");
  };

  return (
    <>  
      <Header />
      <Main>
        <TelaDeInformacoes>
          <Title>Compra realizada com sucesso!</Title>
          <DadosProduto>
            <ProductName>{selectedProduct?.name}</ProductName>
            <PaymentMethod>
              <PriceTotal>R${selectedProduct?.price}</PriceTotal>
              <Payment> {selectedPaymentMethod === "cartao" && <P> em {selectedParcelas} no cartão</P> || selectedPaymentMethod === "dinheiro" && <P> em {selectedPaymentMethod}</P> || selectedPaymentMethod === "outro" && <P> com {selectedOutro}</P>}</Payment>
            </PaymentMethod>
          </DadosProduto>
          <DadosEntrega>
            <TitleEntrega>Pedido enviado</TitleEntrega>
            <InfoEnvio>
              <CEP>
                <P>{dadosEntrega.cep}</P>
                <Span>{dadosEntrega.estadoEntrega}</Span>
                <Span>{dadosEntrega.cidadeEntrega}</Span>
              </CEP>
              <Streeat>
                <P>Rua <Span>{dadosEntrega.rua}</Span></P>
                <P>Bairro <Span>{dadosEntrega.bairro}</Span></P>
                <P>N° <Span>{dadosEntrega.numero}</Span></P>
              </Streeat>
            </InfoEnvio>
          </DadosEntrega>
          <ButtonVoltar onClick={handleButton}>Voltar a pagina principal</ButtonVoltar>
        </TelaDeInformacoes>
      </Main>
    </>
  );
};

export { Finalizado };