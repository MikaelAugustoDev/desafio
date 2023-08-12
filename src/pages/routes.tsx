import {BrowserRouter, Routes, Route} from "react-router-dom";
import { FormularioLogin } from "./FormularioLogin";
import { Home } from "./Home";
import { CadastroDeClientes } from "./CadastroDeClientes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <FormularioLogin /> } />
        <Route path="/home" element={ <Home /> }/>
        <Route path="/cadastrodeclientes" element={ <CadastroDeClientes /> }/>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };