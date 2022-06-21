import React from "react";
import { UserContext } from "../App";
import { register } from "../api/userAPI";
import { Navigate, useNavigate } from "react-router-dom";
import '../assets/styling/components/register.css'
export const Register = () => {
  const { user } = React.useContext(UserContext);
  const [loggedUser, setLoggedUser] = user;

  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = e.target;
    const userDetails = {
      email: email.value,
      password: password.value,
      name: name.value,
      role: role.value,
    };
    navigate("/")
    register(userDetails, setLoggedUser);
  };

  return (
    <div className="container-sinup">
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign Up</h1>
      <div className="input">
        <label htmlFor="name">Name:</label><br/>
        <input type="text" placeholder="Name" name="name" />
      </div>
      <div className="input">
        <label htmlFor="name">email</label><br/>
        <input type="email" placeholder="Email" name="email" />
      </div>
      <div className="input">
        <label htmlFor="name">Password</label><br/>
        <input type="password" placeholder="password" name="password" />
      </div>
      <div className="input">
        <label htmlFor="role">You are a</label>
        <select name="role">
          <option value="1">Seller</option>
          <option value="2">Shopper</option>
        </select>
        <div className="btns">
          <button type="submit" id="">Register</button>
        </div>
      </div>
    </form></div>
  );
};
