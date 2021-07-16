import React from "react";
// import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./login.css";
// import Axios from "axios";
import Header from "../../shared/header/header";

function Login() {
  //NOT WORKING
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("Starting State");

  //   const login = () => {
  //   Axios.get("http://localhost:3001/api/user/login", {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  return (
    <div>
      <Header login="current-page" />
      <div className="login-body">
        <div>
          <h1 className="login-header">Login</h1>
          <form>
            <div className="login-form">
              <div className="login-input-options">
                <label className="login-input-label email-label">Email:</label>
                <label className="login-input-label password-label">
                  Password:
                </label>
              </div>
              <div className="login-inputs">
                <input
                  type="email"
                  className="login-input email-input"
                  // onChange={(event) => {
                  //   setEmail(event.target.value);
                  // }}
                />
                <input
                  type="password"
                  className="login-input password-input"
                  // onChange={(event) => {
                  //   setPassword(event.target.value);
                  // }}
                />
              </div>
            </div>

            <div className="login-button-container">
              <Link to="/dashboard">
                <input
                  type="submit"
                  value="Login"
                  className="login-button"
                  // onClick={login}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
