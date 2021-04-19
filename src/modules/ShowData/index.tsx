import firebase from "firebase";
import React, { useEffect, useState } from "react";

const ShowData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    firebase
      .database()
      .ref()
      .child("user")
      .on("value", (elem) => {
        if (elem.val() !== null) {
          setData(elem.val());
        }
      });
  }, []);
  console.log(data);

  return <></>;
};
export default ShowData;
