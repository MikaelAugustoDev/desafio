import {BrowserRouter, Routes, Route} from "react-router-dom";
import { FormularioLogin } from "./FormularioLogin";
import { Home } from "./Home";
import { CadastroDeClientes } from "./CadastroDeClientes";
import { CadastroDeProdutos } from "./CadastroDeProdutos";
import { AssistenteDePedido } from "./AssistenteDePedido";
import { FinalizandoCompra } from "./FinalizandoCompra";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <FormularioLogin /> } />
        <Route path="/home" element={ <Home /> }/>
        <Route path="/cadastrodeclientes" element={ <CadastroDeClientes /> }/>
        <Route path="/cadastrodeprodutos" element={ <CadastroDeProdutos /> }/>
        <Route path="/assistentedepedido" element={ <AssistenteDePedido /> }/>
        <Route path="/assistentedepedido/:productName" element={ <FinalizandoCompra /> } />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };