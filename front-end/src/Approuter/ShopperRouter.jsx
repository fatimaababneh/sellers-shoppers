import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import LoginPage from "../components/Login";
import { ShopperLayout } from "../layouts/ShopperLayout";
import { Cart } from "../pages/shopper/Cart";
import HomePage from "../pages/shopper/HomePage";
import { ProductPage } from "../pages/shopper/ProductPage";
import ShopPage from "../pages/shopper/ShopPage";
import { StorePage } from "../pages/shopper/StorePage";
// import Checkout from "../pages/shopper/Checkout";

export const ShopperRouter = () => {
  return (
    <BrowserRouter>
      <ShopperLayout>
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/store/:id" element={<StorePage />} />
          <Route
            path="/store=:store_id/product=:id"
            element={<ProductPage />}
          />
        </Switch>
      </ShopperLayout>
    </BrowserRouter>
  );
};
