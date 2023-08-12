import { styled } from "styled-components";
import { Header } from "../../components/header";
import { CardClientes } from "../../components/cardClientes";
import { useState } from "react";
import { CardProducts } from "../../components/cardProducts";
import Arrow from "../../assets/arrow.svg";

interface Client {
    name: string;
}

interface Product {
    name: string;
}

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 50px 0;

    @media (max-width: 425px) {
        padding: 30px;
    }
`;

const TelaDeEscolhaDoCliente = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const TitleClient = styled.h2`
    font-size: 28px;
    color: #111;

    @media (max-width: 320px) {
        font-size: 26px;
    }
`;

const Clients = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 1024px) {
        margin: 30px 0px;
    }

    @media (max-width: 375px) {
        gap: 10px;
    }
`;

const TelaDeEscolhaDeProdutos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const TitleProduct = styled.h2`
    font-size: 26px;
    color: #111;

    @media (max-width: 425px) {
        font-size: 24px;
        width: 80%;
        text-align: center;
    }
`;

const Products = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 1024px) {
        margin: 30px 0px;
    }

    @media (max-width: 375px) {
        gap: 10px;
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

const AssistenteDePedido = () => {

  const handleGoBack = () => {
    setSelectedClient(null);
    setSelectedProduct(null);
  };

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClientSelect = (clientName: Client) => {
    setSelectedClient(clientName);
  };

  const handleProductSelect = (productName: Product) => {
    setSelectedProduct(productName);
  };

  return (
    <>
      <Header />
      <Main>
        {selectedClient === null ? (
          <TelaDeEscolhaDoCliente>
            <TitleClient>Escolha um cliente</TitleClient>
            <Clients>
              <CardClientes name="Mikael" onClick={() => handleClientSelect({ name: "Mikael" })}/>
              <CardClientes name="João" onClick={() => handleClientSelect({ name: "Jõao" })}/>
              <CardClientes name="Humberto" onClick={() => handleClientSelect({ name: "Humberto" })}/>
              <CardClientes name="Lucas" onClick={() => handleClientSelect({ name: "Lucas" })}/>
              <CardClientes name="Alice" onClick={() => handleClientSelect({ name: "Alice" })}/>
            </Clients>
          </TelaDeEscolhaDoCliente>
        ) : selectedProduct === null ? (
          <TelaDeEscolhaDeProdutos>
            <ArrowGoBack 
              src={Arrow}
              onClick={handleGoBack}
            />
            <TitleProduct>Escolha um produto de {selectedClient.name}</TitleProduct>
            <Products>
              <CardProducts
                onClick={() => handleProductSelect({ name: "produto 1" })}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi nesciunt, vel quisquam reiciendis, dicta ab molestias..."
                price={137}
                stock={26782}
              />
              <CardProducts
                onClick={() => handleProductSelect({ name: "produto 2" })}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi nesciunt, vel quisquam reiciendis, dicta ab molestias..."
                price={561}
                stock={678}
              />
              <CardProducts
                onClick={() => handleProductSelect({ name: "produto 3" })}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi nesciunt, vel quisquam reiciendis, dicta ab molestias..."
                price={16}
                stock={1576289}
              />
              <CardProducts
                onClick={() => handleProductSelect({ name: "produto 4" })}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi nesciunt, vel quisquam reiciendis, dicta ab molestias..."
                price={937}
                stock={17}
              />              
            </Products>
          </TelaDeEscolhaDeProdutos>
        ) : (
          <>
            {/* Conteúdo da tela de pedido */}
          </>
        )}
      </Main>
    </>
  );
};

export { AssistenteDePedido };