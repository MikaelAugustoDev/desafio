import { styled } from "styled-components";
import { Header } from "../../components/header";
import { CardClientes } from "../../components/cardClientes";
import { useState } from "react";
import { CardProducts } from "../../components/cardProducts";
import Arrow from "../../assets/arrow.svg";
import { Input } from "../../components/input";

interface Client {
    name: string;
}

interface Product {
    name: string;
    description: string;
    price: number;
    stock: number;
}

const products: Product[] = [
  {
    name: "notebook",
    description: "notebook dolor sit amet consectetur adipisicing elit. Molestias itaque voluptatem optio libero esse, totam ...",
    price: 137,
    stock: 26782,
  },
  {
    name: "mesa",
    description: "Mesa de madeira dolor sit amet consectetur adipisicing elit. Molestias itaque voluptatem optio libero esse, totam ...",
    price: 561,
    stock: 678,
  },
  {
    name: "aparador de grama",
    description: "aparador de grama consectetur adipisicing elit. Molestias itaque voluptatem optio libero esse, totam ...",
    price: 1967,
    stock: 19,
  },
  {
    name: "construtora",
    description: "contrato de serviço para construção itaque voluptatem optio libero esse, totam ...",
    price: 19,
    stock: 592637,
  }
];

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

  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

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
            <Input
              type="text"
              name="Buscar produtos..."
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <Products>
              {filteredProducts.map((product: Product) => (
                <CardProducts
                  key={product.name}
                  onClick={() => handleProductSelect(product)}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  stock={product.stock}
                />
              ))}
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