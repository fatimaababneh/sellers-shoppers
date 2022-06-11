import { TextField } from "@material-ui/core";
import React from "react";
import { UserContext } from "../../App";
import { insertStore } from "../../api/sellerAPI";
import { Navigate, useNavigate } from "react-router-dom";


export const CreateStore = ()=>{
    const { user } = React.useContext(UserContext);
    const [loggedUser, setLoggedUser] = user;
    const navigate = useNavigate();
    console.log(loggedUser)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const {name, desc, img} = e.target
        const store={
            user_id:loggedUser.id,
            name:name.value,
            description:desc.value,
            image:img.value
        }
        insertStore(store);
        navigate("/add-product");

    }


    return(

        <form onSubmit={handleSubmit}>
            <div className="input">
                <label htmlFor="name">Name:</label>
                <input type={"name"} name="name" />
            </div>
            <div className="input">
                <label htmlFor="name">Description:</label>
                <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
            </div>
            <div className="input">
                <label htmlFor="name">Image URL:</label>
                <input type={"text"} name="img" />
            </div>
            <div className="submit">
                <input type={"submit"} name="submit"  value="Create"/>
            </div>

        </form>
    )
}