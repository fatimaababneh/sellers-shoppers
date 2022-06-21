import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { UserContext } from "../../App";
import { insertStore } from "../../api/sellerAPI";
import { Navigate, useNavigate } from "react-router-dom";
import '../../assets/styling/components/createstore.css'
export const CreateStore = ()=>{
    const { user } = React.useContext(UserContext);
    const [errormsg, setErrormsg] = useState();
    const [loggedUser, setLoggedUser] = user;
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        const {name, desc, img} = e.target

        if((name.value != "" && desc.value != "") && img.value != ""){

            const store={
                user_id:loggedUser.id,
                name:name.value,
                description:desc.value,
                image:img.value
            }
            insertStore(store);
            navigate("/add-product");

            }

            else if(name.value == "" || desc.value == "" || img.value == ""){
                setErrormsg("*make sure that you filled all fields");
            }

    }


    return(
            <div className="create-form">    
                <form onSubmit={handleSubmit}>
                
                            <div className="input">
                                {/* <label htmlFor="name">Name:</label> */}
                                <input className="input-feild" placeholder="Name of store" type={"name"} name="name" />
                            </div>
                            <div className="input">
                                {/* <label htmlFor="name">Description:</label> */}
                                <input className="input-feild" placeholder="Description" name="desc" id="desc" cols="30" rows="10"></input>
                            </div>
                            <div className="input">
                                {/* <label htmlFor="name">Image URL:</label> */}
                                <input className="input-feild"  placeholder="Image url" type={"text"} name="img" />
                                <div style={{visibility:errormsg?"visible":"hidden", minHeight:"15px",color:"red",margin:"auto auto"}}>
                                    <h6>{errormsg}</h6></div>
                                </div>
                            <div >
                                <button id="btn-store" type={"submit"} name="submit">Create</button>
                            </div>
                </form>
            </div>
    )
}