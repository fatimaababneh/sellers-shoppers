import React from "react";
import { UserContext } from "../App";
import { register } from "../api/userAPI";
import { Navigate, useNavigate } from "react-router-dom";

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input">
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" name="name" />
      </div>
      <div className="input">
        <label htmlFor="name">email</label>
        <input type="email" placeholder="Email" name="email" />
      </div>
      <div className="input">
        <label htmlFor="name">Password</label>
        <input type="password" placeholder="password" name="password" />
      </div>
      <div className="input">
        <label htmlFor="role">You are a</label>
        <select name="role">
          <option value="1">Seller</option>
          <option value="2">Shopper</option>
        </select>
        <div className="btns">
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  );
};
