import styled from "styled-components";
import ImageClientTest from "../../assets/user.svg";

// Tipagem das props do componente

interface PropsCardClientes {
    name: string,
    onClick: React.MouseEventHandler<HTMLDivElement>,
    cpfCnpj: number,
    email: string,
    code: string,
}

// Estilização em Styled-Components

const Card = styled.div`
    width: 200px;
    height: 300px;
    border: 2px solid #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: 0.3s ease-in;

    &:hover {
        cursor: pointer;
        transform: translateY(-10px);
    }

    &:active {
        transform: translateY(0px);
    }

    @media (max-width: 425px) {
        width: 150px;
        height: 200px;
    }

    @media (max-width: 320px) {
        width: 120px;
        height: 170px;
    }
`;

const ImgClient = styled.img`
    width: 150px;
    height: 150px;
    border: 2px solid #333;
    border-radius: 50%;

    @media (max-width: 425px) {
        width: 130px;
        height: 130px;
    }

    @media (max-width: 320px) {
        width: 100px;
        height: 100px;
    }
`;

const ClientName = styled.p`
    color: #333;
    font-size: 18px;
`;

const CardClientes = (props: PropsCardClientes) => {
  return (
    <Card onClick={props.onClick}>
      <ImgClient 
        src={ImageClientTest}
        alt="Imagem de Perfil"
      />
      <ClientName>{props.name}</ClientName>
    </Card>
  );
};

export { CardClientes };