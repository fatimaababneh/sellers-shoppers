import axios from "axios";
import { toast } from "react-toastify";

// const baseURL = process.env.REACT_APP_SERVER_URL;
const baseURL = "http://localhost:5000";

export const login = (userData, setLoggedUser) => {
  axios
    .post(`${baseURL}/login`, userData)
    .then((res) => {
      console.log(res);
      if (res.data.message === "incorrect email or password") {
        alert(res.data.message);
      } else {
        localStorage.setItem("loggedUser", JSON.stringify(res.data[0]));
        setLoggedUser(res.data[0]);
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Invalid Username or Password");
    });
};

export const register = (userData, setLoggedUser) => {
  axios
    .post(`${baseURL}/insertuser`, userData)
    .then((res) => {
      console.log(res);
      if (res.data.message === "not added") {
        alert(res.data.message);
      } else if(res.data.message ==="user exists"){
        alert(res.data.message);
      } else {
        localStorage.setItem("loggedUser", JSON.stringify(res.data[0]));
        setLoggedUser(res.data[0]);
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Invalid Username or Password");
    });
};
