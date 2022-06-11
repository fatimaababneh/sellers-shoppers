import React from "react";
import { UserContext } from "../../App";
import { getUserStores, insertProduct, insertStore } from "../../api/sellerAPI";
import {  useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading";


export const AddProduct = ()=>{
    const { user } = React.useContext(UserContext);
    const [loggedUser, setLoggedUser] = user;
    const [stores,setStores] = React.useState(null)
    const navigate = useNavigate();
    console.log(loggedUser)

    React.useEffect(()=>{
        getUserStores(loggedUser.id, setStores)
        

    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const {name, desc, img, price, store_id} = e.target
        const store={
            name:name.value,
            description:desc.value,
            url_imag:img.value,
            price:price.value,
            store_id:store_id.value
        }
        insertProduct(store);
        navigate("/add-product");

    }


    return(
        <>
        {!stores && <Loading />}
        {stores && <form onSubmit={handleSubmit}>
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
        <div className="input">
            <label htmlFor="price">price:</label>
            <input type={"number"} name="price" />
        </div>
        <div className="input">
            <label htmlFor="price">Store:</label>
            <select name="store_id">
               {stores.map((el)=> <option value={el.id}>{el.name}</option>)}
            </select>
        </div>
        <div className="submit">
            <input type={"submit"} name="submit"  value="Create"/>
        </div>

    </form>}
    </>

        
    )
}
