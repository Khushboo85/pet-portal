import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
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
      console.log('here');
      
    e.preventDefault();
    history.push("/welcome");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={email}
      ></input>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={passWord}
      ></input>

      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default Login;
