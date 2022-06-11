import React from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { login } from "../api/userAPI";
import { UserContext } from "../App";

const LoginPage = () => {
  const [checked, setChecked] = React.useState(true);
  const { user } = React.useContext(UserContext);
  const [loggedUser, setLoggedUser] = user;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const userDetails = {
      email: email.value,
      password: password.value,
    };
    login(userDetails,setLoggedUser);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Paper>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <TextField label="Email" name="email"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={"password"}
                name="password"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={"Keep me logged in"}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={12}>
              <Link to="/register">Don't have an account, Register here!</Link>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default LoginPage;
