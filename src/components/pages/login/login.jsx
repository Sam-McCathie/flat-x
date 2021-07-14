import React from "react";
import "./login.css";
import Header from "../../shared/header/header";

function login() {
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
                <input type="email" className="login-input email-input" />
                <input type="text" className="login-input password-input" />
              </div>
            </div>
            <div className="login-button-container">
              <input type="submit" value="Login" className="login-button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
