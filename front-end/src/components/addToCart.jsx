import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

export const AddToCart = ({ prod }) => {
  
  const handleClick = () => {
    const data = sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : [];
    data.push(prod);
    sessionStorage.setItem("cart", JSON.stringify(data));
    toast(`${prod.name} was added to your cart !`, {
      position: "top-right",
      autpClose: "4000",
      closeOnClick: true,
      hideProgressBar: false,
    });
  };

  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={() => handleClick()}
      size="small"
    >
      Add To Cart
    </Button>
  );
};
