import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #b1b1b1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Logo = styled.h1`

`;

const MenuHamburguer = styled.label<{ $isOpen: boolean }>`
  cursor: pointer;
  display: block;
  z-index: 100000;

  .svg{
    transform: rotate(${(props) => (props.$isOpen ? "-45deg" : "0")});
  }

  .svg .top {
    stroke-dasharray: ${({ $isOpen }) => ($isOpen ? "20 300" : "12 63")};
    stroke-dashoffset: ${({ $isOpen }) => ($isOpen ? "-32.42" : "0")};
  }
`;

const Svg = styled.svg`
  height: 3em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);

  .line{
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const PathTop = styled.path`
  stroke-dasharray: 12 63;
`;

const MenuWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: #b1b1b1;
  z-index: 200;
  padding: 100px 0;
  opacity: ${props => (props.$isOpen ? "1" : "0")};
  visibility: ${props => (props.$isOpen ? "visible" : "hidden")};
  transition: 0.6s, opacity 0.6s, visibility 0.6s;
`;

const LinkNavigation = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #000;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #FFF;
  }
`;

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleLinkClick = () => {
  //   setIsOpen(false);
  // };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <Headers>
      <Logo>Logo</Logo>
      <MenuHamburguer onClick={handleMenuClick} $isOpen={isOpen}>
        <div className="input"/>
        <Svg
          className="svg"
          viewBox="0 0 32 32"
        >
          <PathTop
            className="line top"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          >   
          </PathTop>
          <path
            className="line"
            d="M7 16 27 16"
          >
          </path>
        </Svg>
      </MenuHamburguer>
      <MenuWrapper $isOpen={isOpen}>
        <LinkNavigation to="/cadastrodeprodutos">Cadastro de Produtos</LinkNavigation>
        <LinkNavigation to="/cadastrodeclientes">Cadastro de Clientes</LinkNavigation>
        <LinkNavigation to="/assistentedepedido">Assistente de Pedido</LinkNavigation>
      </MenuWrapper>
    </Headers>
  );
};

export { Header };