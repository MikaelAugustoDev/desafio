import {BrowserRouter, Routes, Route} from "react-router-dom";
import { FormularioLogin } from "./FormularioLogin";
import { Home } from "./Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <FormularioLogin /> } />
        <Route path="/home" element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };