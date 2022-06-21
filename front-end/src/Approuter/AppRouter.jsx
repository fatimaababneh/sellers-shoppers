import React, { useContext } from "react";
import SellerRouter from "./SellerRouter";
import { ShopperRouter } from "./ShopperRouter";
import { SHOPPER, SELLER } from "../enums";
import { UserContext } from "../App";
import LogistrationRouter from "./LogistrationRouter";

export const AppRouter = () => {
  const { user } = useContext(UserContext);
  const [loggedUser, setLoggedUser] = user;
  console.log(user)
  return (
    <>
      {loggedUser?.role == SELLER ? (
        <SellerRouter />
      ) : loggedUser?.role == SHOPPER ? (
        <ShopperRouter />
      ) : (
        !loggedUser && <LogistrationRouter />
      )}
    </>
  );
};