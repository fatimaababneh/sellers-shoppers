import { Grid } from "@material-ui/core";
import React from "react";
import { getSellerOrders, getUserStores } from "../../api/sellerAPI";
import { getStore } from "../../api/shopperAPI";
import { Loading } from "../../components/loading";
import { UserContext } from "../../App";


export const ShowProducts = ()=>{
    const { user } = React.useContext(UserContext);
    const [loggedUser, setLoggedUser] = user;

    const [stores,setStores] = React.useState(null);
    const [products,setProducts] = React.useState(null);
    const [storeId, setStoreId] = React.useState(null);
    const [orders, setOrders] = React.useState(null);
    const [showing, setShowing] = React.useState(null);


    React.useEffect(()=>{
        getUserStores(loggedUser.id, setStores)
       
    },[])

    React.useEffect(()=>{
        if(storeId)
       { getStore(storeId, setProducts)
        getSellerOrders(storeId, setOrders)}
    },[storeId])



    return(
    <>
    {(!stores) && <Loading/> }
        {stores && (
            <Grid container>
                    <Grid item xs={5}>
                        <label htmlFor="store_id">Store:</label>
                        <select name="store_id" onChange={(e)=>setStoreId(e.target.value)}>
                            {stores.map((el)=> <option value={el.id}>{el.name}</option>)}
                        </select>
                    </Grid>
                    <Grid item xs={5}>
                        <label htmlFor="show">Store:</label>
                        <select name="show" onChange={(e)=>setShowing(e.target.value)}>
                            <option value={1}>Orders</option>
                            <option value={2}>Products</option>
                        </select>
                    </Grid>
            </Grid>
        )}
    {stores && (products || orders) && (
                <Grid container>
                    <Grid item xs={12}>
                        {orders.map((el)=>{
                                return(
                                    <>
                                        <p>{el.id}</p>
                                        <p>{el.product_name}</p>
                                        <p>{el.price}</p>
                                        <img src={el.product_image} style={{width:"20vh"}} />
                                        <p>{el.quantity}</p>
                                    </>
                                )
                            })
                        }
                    </Grid>
            </Grid>
    )}
    </>

    )
}