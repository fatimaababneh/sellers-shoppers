import React, { useEffect, useState } from "react";
import "../assets/styling/components/shop.css";
import Axios from "axios";
import { Link } from "react-router-dom";
const Shop = () => {
  const [product, Addproduct] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {}
  );

  useEffect(() => {
    Axios.get("http://localhost:5000/getitem").then((response) => {
      console.log(response.data);
    });
  }, []);

  const items = [
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/4077320/pexels-photo-4077320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/4077320/pexels-photo-4077320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/4077320/pexels-photo-4077320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/4077320/pexels-photo-4077320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/4077320/pexels-photo-4077320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/4077320/pexels-photo-4077320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/8442726/pexels-photo-8442726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "soft",
      price: 23,
      imgurl:
        "https://images.pexels.com/photos/1390433/pexels-photo-1390433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const Additem = () => {};

  return (
    <div className="shop-container">
      <div className="shop-img">
        {/* <Navbar /> */}
        <h1 id="shop-img-content">Its Shop Time</h1>
      </div>
      <div className="cards-part">
        {items.map((element, index) => {
          return (
            <div className="card">
              <img src={element.imgurl} alt="" />
              <div>
                {" "}
                <h4>{element.name}</h4>
                <h4>{element.price}</h4>
              </div>
              <Link to="/cart">
                <button onClick={Additem()} className="shop-btn">
                  buy now
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
