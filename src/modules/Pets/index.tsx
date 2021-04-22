import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import { useHistory } from "react-router";
import fire from "../../firebase";
import useStyles from "./styles";


const Pet = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    fire
          .database()
          .ref()
          .child("pet")
          .push({
            petName,
            breed,
            type,
            petSize,
            
          })
          .then((resp) => {
            history.push("/Dashboard");
          });
  };
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [type, setType] = useState("");
  const [petSize, setPetSize] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Pet Details
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="petName"
                variant="outlined"
                required
                fullWidth
                id="petName"
                label="Pet Name"
                autoFocus
                value={petName}
                onChange={(event: any) => {
                  setPetName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="breed"
                label="Breed"
                name="breed"
                autoComplete="breed"
                value={breed}
                onChange={(event: any) => {
                  setBreed(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="type"
                label="Type"
                name="type"
                autoComplete="type"
                value={type}
                onChange={(event: any) => {
                  setType(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="petSize"
                label="Pet Size"
                id="petSize"
                autoComplete="petSize"
                value={petSize}
                onChange={(event: any) => {
                  setPetSize(event.target.value);
                }}
              />
            </Grid>
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save Details
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default Pet;
