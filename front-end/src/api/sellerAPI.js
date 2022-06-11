import axios from "axios";
import { toast } from "react-toastify";

// const baseURL = process.env.REACT_APP_SERVER_URL;
const baseURL = "http://localhost:5000";


export const insertStore = (store) => {
  axios
    .post(`${baseURL}/insert/store`, store)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    alert("An Error Occured, Please Try Again Later");
    });
};
export const getUserStores = (userId, setStores) => {
  axios
    .get(`${baseURL}/get/store/user/${userId}`)
    .then((res) => {
      console.log(res.data);
      setStores(res.data);
    })
    .catch((err) => {
      console.log(err);
    alert("An Error Occured, Please Try Again Later");
    });
};

export const insertProduct= (product) => {
    axios
      .post(`${baseURL}/insert/product`, product)
      .then((res) => {
        console.log(res.data);
        alert("added succesfully")
      })
      .catch((err) => {
        console.log(err);
      alert("An Error Occured, Please Try Again Later");
      });
  };

  export const getStore = (id, setStore) => {
    axios
      .get(`${baseURL}/store/product/${id}`)
      .then((res) => {
        console.log(res.data)
        setStore(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("An Error Occured, Please Try Again Later");
      });
  };

  export const getSellerOrders = (id, setOrders) => {
    axios
      .get(`${baseURL}/order/store/${id}`)
      .then((res) => {
        console.log(res.data)
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("An Error Occured, Please Try Again Later");
      });
  };
