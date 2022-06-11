import { Button } from "@material-ui/core";
import React from "react";
import {  useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { Loading } from "../../components/loading";
import { DataTable } from "../../components/Table";
import { insertOrder } from "../../api/shopperAPI";

export const Cart = () => {
  const { user } = React.useContext(UserContext);
  const [loggedUser, setLoggedUser] = user;
  const navigate=useNavigate()

  const [items, setItems] = React.useState();
  const [total, setTotal] = React.useState(0)

  const handleSubmit =()=>{
    let check = 0
    items.forEach((el)=>{
      check += el.price
    })
    setTotal(check)
    if(loggedUser){
      const order = {
        email:loggedUser.email,
        role:loggedUser.role,
        total: total,
        mobile:"084973847",
        items:items.map((el)=>{return(
          {
            item_id:el.id,
            quantity:1,
          }
        )})
      }
      console.log(order)
      insertOrder(order)
      navigate("/")
    }
  }

  React.useEffect(() => {
    const data = sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : null;
    setItems(data);
  }, []);

  console.log(items && items.map((el)=>{return(
    {
      item_id:el.id,
      quantity:1,
    }
  )}))
  return (
    <>
      {!items && <Loading />}
      {items && (
        <>
          <DataTable data={items} setData={setItems} />
          <br/>
          <Button onClick={()=>{handleSubmit()}} variant="contained" color="secondary">Submit Order</Button>
        </>
      )
        
        }
    </>
  );
};
