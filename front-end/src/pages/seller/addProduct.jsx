import React,{useState} from "react";
import { UserContext } from "../../App";
import { getUserStores, insertProduct, insertStore } from "../../api/sellerAPI";
import {  useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading";
import '../../assets/styling/components/addproduct.css'

export const AddProduct = ()=>{
    const { user } = React.useContext(UserContext);
    const [loggedUser, setLoggedUser] = user;
    const [stores,setStores] = React.useState(null)
    const navigate = useNavigate();
    const [errormsg, setErrormsg] = useState();
    console.log(loggedUser)

    React.useEffect(()=>{
        getUserStores(loggedUser.id, setStores)
        

    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const {name, desc, img, price, store_id} = e.target
        if((name.value != "" && desc.value != "") && img.value != ""){
        const store={
            name:name.value,
            description:desc.value,
            url_imag:img.value,
            price:price.value,
            store_id:store_id.value
        }
        insertProduct(store);
        navigate("/add-product");}
        else if(name.value == "" || desc.value == "" || img.value == ""){
            setErrormsg("*make sure that you filled all fields");
        }

    }


    return(
        <>
        {!stores && <Loading />}
        {stores && <form className="add-prod" onSubmit={handleSubmit}>
        <div className="input">
            <input className="input-feild" placeholder="Name" type={"name"} name="name" />
        </div>
        <div className="input">
            <textarea className="input-feild" placeholder="Description" name="desc" id="desc" cols="30" rows="10"></textarea>
        </div>
        <div className="input">
            <input className="input-feild" placeholder="Url of image" type={"text"} name="img" />
        </div>
        <div className="input">
            <input className="input-feild" placeholder="Price" type={"number"} name="price" />
            <div style={{visibility:errormsg?"visible":"hidden", minHeight:"15px",color:"red",margin:"auto auto"}}>
                                    <h6>{errormsg}</h6></div>
        </div>
        <div className="input">
            <select name="store_id">
               {stores.map((el)=> <option value={el.id}>{el.name}</option>)}
            </select>
           
        </div>
        <div className="submit">
        
            <input id="btn-add" type={"submit"} name="submit"  value="Add"/>
        </div>

    </form>}
    </>

        
    )
}
