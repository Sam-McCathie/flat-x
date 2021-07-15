import React from "react";
import "./register.css";
import Header from "../../shared/header/header";

function register() {
  return (
    <div>
      <Header register="current-page" />
      <div className="register-body">
        <div>
          <h1 className="register-header">Register</h1>
          <form>
            <div className="register-form">
              <div className="register-input-options">
                {/*Left side of div */}
                <label className="register-input-label register-email-label">
                  Email:
                </label>
                <label className="register-input-label register-username-label">
                  Username:
                </label>
                <label className="register-input-label register-password-label">
                  Password:
                </label>
              </div>
              {/*Right side of div */}
              <div className="register-inputs">
                <input
                  type="email"
                  className="register-input register-email-input"
                />
                <input
                  type="text"
                  className="register-input register-username-input"
                />

                <input
                  type="text"
                  className="register-input register-password-input"
                />
              </div>
            </div>
            <div className="register-button-container">
              <input
                type="submit"
                value="Register"
                className="register-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default register;
