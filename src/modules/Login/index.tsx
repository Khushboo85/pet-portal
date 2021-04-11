import { Box, Button, Container, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { RootState } from '../../reducer';
const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const loginState = useSelector((state:RootState)=>state.loginState)
  const history = useHistory();
  const handleChange = (e: any) => {
    console.log(e.target);
    e.preventDefault();
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  };
  const handleSubmit = (e: any) => {
    console.log("here");

    e.preventDefault();
    history.push("/welcome");
  };
  return (
    <Container>
      <Grid>
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                type="text"
                name="email"
                onChange={handleChange}
                value={email}
                variant="outlined"
                label="Email"
                fullWidth
              />

              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                value={passWord}
                variant="outlined"
                label="Password"
                fullWidth
              />
            </Box>

            <Box>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Container>
  );
};

export default Login;
