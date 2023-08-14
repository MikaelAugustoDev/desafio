import { styled } from "styled-components";
import { Header } from "../../components/header";
import { CardClientes } from "../../components/cardClientes";
import { useEffect, useState } from "react";
import { CardProducts } from "../../components/cardProducts";
import Arrow from "../../assets/arrow.svg";
import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";

// Tipagem de dados

interface Client {
  code: string,
  name: string,
  cpfCnpj: number,
  email: string
}

interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}

// Produtos previamente cadastrados:

const products: Product[] = [
  {
    name: "notebook",
    description: "Notebook para testar um card de compra de um notebook gamer, da marca Dell compre se quiser",
    price: 137,
    stock: 26782,
  },
  {
    name: "mesa",
    description: "Mesa de madeira feita totalmente de madeira, pode comprar que vai chegar",
    price: 561,
    stock: 678,
  },
  {
    name: "emprego",
    description: "Emprego na Cartsys esgotado, vaga ocupada por Mikael Augusto",
    price: 2000,
    stock: 0,
  }
];

// Estilizações em Styled-Components

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

const CustomerChoiceScreen = styled.div`
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

const ProductSelectionScreen = styled.div`
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

const OrderAssistant = () => {

  // Lógica para retornar ao Formulario anterior

  const handleGoBack = () => {
    setSelectedClient(null);
    setSelectedProduct(null);
  };

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Lógica para saber em qual cliente estou escolhendo para poder pegar suas informações posteriormente

  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
  };

  // Lógica para procurar em tempo real por produtos

  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Filtrando os produtos para que apareçam ao digitar no input

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const navigate = useNavigate();

  // Lógica que salva as informações do produto selecionado em localStorage e redireciona o cliente para rota de pagamento daquele produto

  const handleProductSelectNavigate = (selectedProduct: Product) => {
    setSelectedProduct(selectedProduct);
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    navigate(`/assistentedepedido/${selectedProduct?.name}`);
  };
  
  const [productCadastrado, setProductCadastrado] = useState<Product | null>(null);

  const [clientCadastrado, setClientCadastrado] = useState<Client | null>(null);

  // Lógica para armazenar e exibir as informações que vieram das rotas de cadastro e garantir que sempre apareça a escolah de clientes primeiro
  
  useEffect(() => {

    setSelectedClient(null);
    setSelectedProduct(null);
    
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setSelectedClient(JSON.parse(storedProduct));
    } else {
      setSelectedProduct(null);
    }

    const storedClient = localStorage.getItem("selectedClient");
    if (storedClient) {
      setSelectedProduct(JSON.parse(storedClient));
    } else {
      setSelectedClient(null);
    }
  
    const productRegisteredAndStored = localStorage.getItem("registeredProduct");
    if (productRegisteredAndStored) {
      setProductCadastrado(JSON.parse(productRegisteredAndStored));
    }

    const registeredAndStoredCustomer = localStorage.getItem("registeredCustomer");
    if (registeredAndStoredCustomer) {
      setClientCadastrado(JSON.parse(registeredAndStoredCustomer));
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        {selectedClient === null ? (
          <CustomerChoiceScreen>
            <TitleClient>Escolha um cliente</TitleClient>
            <Clients>
              {clientCadastrado && (
                <CardClientes
                  key={clientCadastrado.code}
                  name={clientCadastrado.name}
                  cpfCnpj={clientCadastrado.cpfCnpj}
                  email={clientCadastrado.email}
                  code={clientCadastrado.code}
                  onClick={() => handleClientSelect(clientCadastrado)}
                />
              )}
              <CardClientes 
                name="Mikael"
                onClick={() => handleClientSelect({
                  name: "Mikael",
                  code: "",
                  cpfCnpj: 0,
                  email: ""
                })} 
                cpfCnpj={0} 
                email={""} 
                code={""}              
              />
              <CardClientes 
                name="Humberto"
                onClick={() => handleClientSelect({
                  name: "Humberto",
                  code: "",
                  cpfCnpj: 0,
                  email: ""
                })} 
                cpfCnpj={0} 
                email={""} 
                code={""}              
              />
            </Clients>
          </CustomerChoiceScreen>
        ) : selectedProduct === null ? (
          <ProductSelectionScreen>
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
              {productCadastrado && (
                <CardProducts
                  key={productCadastrado.name}
                  name={productCadastrado.name}
                  description={productCadastrado.description}
                  price={productCadastrado.price}
                  stock={productCadastrado.stock}
                  onClick={() => handleProductSelectNavigate(productCadastrado)}
                />
              )}
              {filteredProducts.map((product: Product) => (
                <CardProducts
                  key={product.name}
                  onClick={() => handleProductSelectNavigate(product)}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  stock={product.stock}
                />
              ))}
            </Products>

          </ProductSelectionScreen>
        ) : null}
      </Main>
    </>
  );
};

export { OrderAssistant };