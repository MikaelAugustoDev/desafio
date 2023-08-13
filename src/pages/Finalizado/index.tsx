import { styled } from "styled-components";
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

const Finalizado = () => {

  const dadosEntregaString = localStorage.getItem("dadosEntrega");
  const dadosEntrega = dadosEntregaString ? JSON.parse(dadosEntregaString) : {};
  const selectedPaymentMethod = localStorage.getItem("selectedPaymentMethod");
  const selectedParcelas = localStorage.getItem("selectedParcelas");
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct") || "null");

  return (
    <>  
      <Header />
      <Main>
        <p>Produto: {selectedProduct?.name}</p>
        <p>Valor do Produto: R$ {selectedProduct?.price}</p>
        <p>Forma de Pagamento: {selectedPaymentMethod}</p>
        {selectedPaymentMethod === "cartao" && <p>Parcelas: {selectedParcelas}</p>}
        <p>CEP: {dadosEntrega.cep}</p>
        <p>Estado: {dadosEntrega.estadoEntrega}</p>
        <p>Cidade: {dadosEntrega.cidadeEntrega}</p>
        <p>Rua: {dadosEntrega.rua}</p>
        <p>Bairro: {dadosEntrega.bairro}</p>
        <p>Número: {dadosEntrega.numero}</p>
      </Main>
    </>
  );
};

export { Finalizado };