import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const ShopperLayout = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid container xs={12} spacing={0}>
          <Grid style={{ minHeight: "76.2vh" }} item xs={12} md={12}>
            {props.children}
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
};
