import { styled } from "styled-components";
import ImageProductTest from "../../assets/image.svg";

interface PropsCardProducts {
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    description: string,
    price: number,
    stock: number,
    name?: string
}

const Card = styled.div`
    width: 250px;
    height: 350px;
    border: 2px solid #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
    }
`;

const ImageProduct = styled.img`
    width: 100%;
    height: 50%;
`;

const InfoProduct = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
`;

const PriceProduct = styled.p`
    font-size: 24px;
    font-weight: 800;
`;

const DescriptionProduct = styled.p`
    font-size: 13px;
    font-weight: 500;
`;

const StockProduct = styled.p`
    font-size: 10px;
    font-weight: 900;
    text-align: end;
    margin-top: 30px;
`;

const CardProducts = (props: PropsCardProducts) => {
  return (
    <Card onClick={props.onClick}>
      <ImageProduct 
        src={ImageProductTest}
        alt="Imagem do Produto" 
      />
      <InfoProduct>
        <PriceProduct>R$ {props.price}</PriceProduct>
        <DescriptionProduct>{props.description}</DescriptionProduct>
        <StockProduct>{props.stock} em estoque</StockProduct>
      </InfoProduct>
    </Card>
  );
};

export { CardProducts };