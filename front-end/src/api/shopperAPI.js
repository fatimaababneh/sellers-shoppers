import axios from "axios";
import { toast } from "react-toastify";

// const baseURL = process.env.REACT_APP_SERVER_URL;
const baseURL = "http://localhost:5000";


export const getAllStores = (setAllStores) => {
  axios
    .get(`${baseURL}/getstores`)
    .then((res) => {
      setAllStores(res.data);
    })
    .catch((err) => {
      console.log(err);
      toast.error("An Error Occured, Please Try Again Later");
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
export const getProduct = (id, setProduct) => {
  axios
    .get(`${baseURL}/product/${id}}`)
    .then((res) => {
      console.log(res.data[0])
      setProduct(res.data[0]);
    })
    .catch((err) => {
      console.log(err);
      toast.error("An Error Occured, Please Try Again Later");
    });
};
export const insertOrder = (order) => {
  axios
    .post(`${baseURL}/addorder`, order)
    .then((res) => {
      console.log(res.data)
      alert("Added Successfuly")
      sessionStorage.removeItem('cart')
    })
    .catch((err) => {
      console.log(err);
      alert("An Error Occured, Please Try Again Later");
    });
};
