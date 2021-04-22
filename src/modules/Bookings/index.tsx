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


const Booking = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    fire
          .database()
          .ref()
          .child("booking")
          .push({
            arrival,
            departure,
            clientNotes,
            status,
            fee,
            receipt
          })
          .then((resp) => {
            history.push("/Dashboard");
          });
  };
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [clientNotes, setClientNotes] = useState("");
  const [status, setStatus] = useState("");
  const [fee, setFee] = useState("");
  const [receipt, setReceipt] = useState("");


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Booking Details
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="arrival"
                name="arrival"
                variant="outlined"
                required
                fullWidth
                id="arrival"
                label="Arrival Date"
                autoFocus
                value={arrival}
                onChange={(event: any) => {
                  setArrival(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="departure"
                label="Departure Date"
                name="departure"
                autoComplete="departure"
                value={departure}
                onChange={(event: any) => {
                  setDeparture(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="clientNotes"
                label="Client Notes"
                name="clientNotes"
                autoComplete="clientNotes"
                value={clientNotes}
                onChange={(event: any) => {
                  setClientNotes(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="status"
                label="Status"
                id="status"
                autoComplete="status"
                value={status}
                onChange={(event: any) => {
                  setStatus(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="fee"
                label="Fee"
                id="fee"
                autoComplete="fee"
                value={fee}
                onChange={(event: any) => {
                  setFee(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="receipt"
                label="Receipt"
                id="receipt"
                autoComplete="receipt"
                value={receipt}
                onChange={(event: any) => {
                  setReceipt(event.target.value);
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
export default Booking;
