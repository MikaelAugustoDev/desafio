import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { Home } from "./Home";
import { CustomerRegistration } from "./CustomerRegistration";
import { ProductRegistration } from "./ProductRegistration";
import { OrderAssistant } from "./OrderAssistant";
import { FinalizingPurchase } from "./FinalizingPurchase";
import { Finalizado } from "./Finalizado";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginForm /> } />
        <Route path="/home" element={ <Home /> }/>
        <Route path="/cadastrodeclientes" element={ <CustomerRegistration /> }/>
        <Route path="/cadastrodeprodutos" element={ <ProductRegistration /> }/>
        <Route path="/assistentedepedido" element={ <OrderAssistant /> }/>
        <Route path="/assistentedepedido/:productName" element={ <FinalizingPurchase /> } />
        <Route path="/finalizado" element={ <Finalizado /> } />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };