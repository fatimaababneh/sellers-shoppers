import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import LoginPage from "../components/Login";
import { Regiseter, Register } from "../pages/register";
const LogistrationRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Switch>
    </BrowserRouter>
  );
};
export default LogistrationRouter;
