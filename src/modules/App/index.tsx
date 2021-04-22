import React from "react";
import MiniDrawer from '../../components/Drawer';
import Booking from "../Bookings";
import Pet from "../Pets";
import Routes from "./routes";
const App = () => {
  return (
    <>
      <MiniDrawer />
      <Routes />
      <Pet />
      <Booking />
    </>
  );
};
export default App;
