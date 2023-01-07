import React, { useState } from "react";
import "./styles/Login.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const LogIn = (props) => {
  const [usernameLogin, setusernameLogin] = useState("");
  const [passwordLogin, setpasswordLogin] = useState("");
  const [loginstatus, setloginstatus] = useState("");
  const navigate= useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault();
    const post = {
      username: usernameLogin,
      password: passwordLogin,
    };
    try {
      const response = await Axios.post("http://localhost:4000/LogIn", post);
      if (response.data.message) {
        setloginstatus(response.data.message);
      } else {
        //login successful
        setloginstatus(response.data.username);
        props.setLoggedUser(response.data.username)
        navigate("/HomePage")
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="login">
      <form>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setusernameLogin(e.target.value);
          }}
          placeholder="Enter Username"
          name="username"
          value={usernameLogin}
          required
        />
        <br></br>
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          onChange={(e) => {
            setpasswordLogin(e.target.value);
          }}
          placeholder="Enter Password"
          name="password"
          value={passwordLogin}
          required
        />

        <button onClick={onSubmit}>Login</button>
        <h6>{loginstatus}</h6>
      </form>
    </div>
  );
};
export default LogIn;
