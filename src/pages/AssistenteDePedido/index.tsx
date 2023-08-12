import { styled } from "styled-components";
import { Header } from "../../components/header";
import { CardClientes } from "../../components/cardClientes";
import { useEffect, useState } from "react";
import { CardProducts } from "../../components/cardProducts";
import Arrow from "../../assets/arrow.svg";
import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";

// Tipagem de dados:

interface Client {
    codigo: string,
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

// Produtos já cadastrados:

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
  }
];

// Estilizações:

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

  // Voltar para a etapa anterior
  const handleGoBack = () => {
    setSelectedClient(null);
    setSelectedProduct(null);
  };

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
  };

  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const navigate = useNavigate();

  const handleProductSelectNavigate = (productName: Product) => {
    setSelectedProduct(productName);
    navigate(`/assistentedepedido/${productName.name}`);
  };
  
  const [productCadastrado, setProductCadastrado] = useState<Product | null>(null);

  const [clientCadastrado, setClientCadastrado] = useState<Client | null>(null);
  
  useEffect(() => {
    const produtoArmazenado = localStorage.getItem("selectedProduct");
    if (produtoArmazenado) {
      setSelectedClient(JSON.parse(produtoArmazenado));
    }

    const clienteArmazenado = localStorage.getItem("selectedClient");
    if (clienteArmazenado) {
      setSelectedProduct(JSON.parse(clienteArmazenado));
    }
  
    const produtoCadastradoArmazenado = localStorage.getItem("produtoCadastrado");
    if (produtoCadastradoArmazenado) {
      setProductCadastrado(JSON.parse(produtoCadastradoArmazenado));
    }

    const clienteCadastradoArmazenado = localStorage.getItem("clienteCadastrado");
    if (clienteCadastradoArmazenado) {
      setClientCadastrado(JSON.parse(clienteCadastradoArmazenado));
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        {selectedClient === null ? (
          <TelaDeEscolhaDoCliente>
            <TitleClient>Escolha um cliente</TitleClient>
            <Clients>
              {clientCadastrado && (
                <CardClientes
                  key={clientCadastrado.codigo}
                  name={clientCadastrado.name}
                  cpfCnpj={clientCadastrado.cpfCnpj}
                  email={clientCadastrado.email}
                  codigo={clientCadastrado.codigo}
                  onClick={() => handleClientSelect(clientCadastrado)}
                />
              )}
              <CardClientes 
                name="Mikael"
                onClick={() => handleClientSelect({
                  name: "Mikael",
                  codigo: "",
                  cpfCnpj: 0,
                  email: ""
                })} 
                cpfCnpj={0} 
                email={""} 
                codigo={""}              
              />
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

          </TelaDeEscolhaDeProdutos>
        ) : (
          <>
          </>
        )}
      </Main>
    </>
  );
};

export { AssistenteDePedido };