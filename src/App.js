import Layout from "./Page/Layout/Layout.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Page/MainPage/mainPage.js";
import ProductPage from "./Page/productPage/ProductPage.js";
import ProductDetailCard from "./Page/productDetailPage/productDetailPage.js";
import LoginPage from "./Page/LoginRegisterPage/LoginPage.js";
import RegisterPage from "./Page/LoginRegisterPage/RegisterPage.js";
import BasketPage from "./Page/BasketPage/BasketPage.js";
import AuthRoute from "./Page/Auth/AuthRoute.js";
import PaymentPage from "./Page/PaymentPage/PaymentPage.js";
import OrderPage from "./Page/OrderPage/orderPage.js";


const App = () => {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/products/search" element={<ProductPage />} />
        <Route path="/products/detail/:id" element={<ProductDetailCard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<AuthRoute />}>
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/orders" element={<OrderPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
