import { Link, useParams } from "react-router-dom";
import React from "react";
import { UserContext } from "../../App";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Loading } from "../../components/loading";
import { AddToCart } from "../../components/addToCart";
import { getProduct } from "../../api/shopperAPI";

export const ProductPage = (props) => {
  const { user } = React.useContext(UserContext);
  const [loggedUser, setLoggedUser] = user;
  const { store_id, id } = useParams();
  const [products, setProducts] = React.useState();

  const captionStyle = {
    color: "grey",
    margin: "15%",
    fontSize: "1.2vw",
    textDecoration: "none",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const tipsStyle = {
    display: "block",
    color: "red",
  };

  React.useEffect(() => {
    getProduct(id,setProducts)
  }, []);

  return (
    <>
      {(!products) && <Loading />}
      {products && (
        <Grid container xs={12} style={{ margin: "25px 0 0 5px" }} spacing={2}>
          <Grid className="head" item xs={8} position="sticky">
            <h3>{products.product_name}</h3>
          </Grid>
          <Grid className="Btn" item xs={2}>
            {loggedUser.id != products.owner_id &&
            <AddToCart prod={products} />}
          </Grid>
          <Grid className="left-prods" item xs={11} md={6}>
            <Grid
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "gold",
              }}
              item
              xs={12}
            >
              <img src={products.product_image} style={{ width: "90%", margin: "5%" }} />
              <Grid item xs={2}>
                <span style={captionStyle}>City:Amman</span>
                <span style={captionStyle}>Status:New</span>
                <span style={captionStyle}>
                  Store:
                  <Link style={linkStyle} to={`/store/${store_id}`}>
                    {products.store_name}
                  </Link>
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="right-prods" item xs={11} md={4}>
            {/* PRICE----- */}
            <Grid style={{ backgroundColor: "lightGrey" }} item xs={12}>
              <h3 style={{ color: "red" }}>
                {products.price}
                <small style={{ fontSize: "13px" }}>JD</small>
              </h3>
            </Grid>
            {/* USER ----- */}
            <Grid style={{ backgroundColor: "#F3F3F3" }} item xs={12}>
              {/* <Link to={`/user/`} style={linkStyle}>
                {str.owner}
              </Link> */}

              <br />
            </Grid>
            <br />
            <Divider />
            <p>Quantity: {"700"}</p>
            <Divider />
            <Grid item xs={12}>
              <small style={tipsStyle}>Warning:</small>
              <small style={tipsStyle}>- Only meet in public places</small>
              <small style={tipsStyle}>
                - Never pay or transfer money in advance.
              </small>
              <small style={tipsStyle}>
                - Inspect the prods before you buy it.
              </small>
            </Grid>
            <Divider />
            <Grid xs={12} style={{ margin: "20px 0px" }}>
              <Button danger>Report</Button>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            item
            xs={10}
            style={{
              backgroundColor: "#F3F3F3",
              margin: "15px 0 0 16px",
            }}
          >
            <p>Description:</p>
            <p>{products.product_description ? products.product_description : " No Description Available"}</p>
          </Grid>
        </Grid>
      )}
    </>
  );
};
