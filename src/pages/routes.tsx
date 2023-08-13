import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { Home } from "./Home";
import { CadastroDeClientes } from "./CadastroDeClientes";
import { CadastroDeProdutos } from "./CadastroDeProdutos";
import { AssistenteDePedido } from "./AssistenteDePedido";
import { FinalizandoCompra } from "./FinalizandoCompra";
import { Finalizado } from "./Finalizado";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginForm /> } />
        <Route path="/home" element={ <Home /> }/>
        <Route path="/cadastrodeclientes" element={ <CadastroDeClientes /> }/>
        <Route path="/cadastrodeprodutos" element={ <CadastroDeProdutos /> }/>
        <Route path="/assistentedepedido" element={ <AssistenteDePedido /> }/>
        <Route path="/assistentedepedido/:productName" element={ <FinalizandoCompra /> } />
        <Route path="/finalizado" element={ <Finalizado /> } />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };