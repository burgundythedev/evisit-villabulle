import React from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, AdminRoute } from "./components/index";
import {
  Home,
  Contact,
  Login,
  Register,
  Reset,
  Admin,
  ProductDetails,
  Product,
  Cart,
  CheckoutDetails,
  CheckoutSuccess,
  CheckoutSummary,
  OrderHistory,
  OrderDetails,
  NotFound,
} from "./pages/index";
import { Helmet } from "react-helmet";

const App = () => {
  <Helmet>
    <meta charSet="utf-8" />
    <title>E-COMMERCE</title>
    <link
      rel="canonical"
      href="https://burgundythedev.github.io/evisit-villabulle"
    />
  </Helmet>;
  return (
    <React.Fragment>
      <ToastContainer />
      <BrowserRouter basename="/evisit-villabulle">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/checkout-summary" element={<CheckoutSummary />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
