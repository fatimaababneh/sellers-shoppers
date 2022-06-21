import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import HomePage from "../pages/shopper/HomePage";
import { SellerLayout } from "../layouts/SellerLayout";
import { Cart } from "../pages/shopper/Cart";
import { StorePage } from "../pages/shopper/StorePage";
import { ProductPage } from "../pages/shopper/ProductPage";
import { CreateStore } from "../pages/seller/createStore";
import { AddProduct } from "../pages/seller/addProduct";
import { ShowProducts } from "../pages/seller/showProducts";

const SellerRouter = () => {
  return (
    <BrowserRouter>
    <SellerLayout>
      <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-store" element={<CreateStore />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<ShowProducts />} />
      <Route path="/store/:id" element={<StorePage />} />
      <Route
        path="/store=:store_id/product=:id"
        element={<ProductPage />}/>

      </Switch>
    </SellerLayout>
    </BrowserRouter>
  );
};
export default SellerRouter;
