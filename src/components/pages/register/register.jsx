import React, {useState} from "react";
import "./register.css";
import Axios from "axios";
import Header from "../../shared/header/header";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:3001/api/user/register", {
      email: email,
      username: username,
      password: password,
    });
  };

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
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <input
                  type="text"
                  className="register-input register-username-input"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />

                <input
                  type="text"
                  className="register-input register-password-input"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="register-button-container">
              <input
                type="submit"
                value="Register"
                className="register-button"
                onClick={addUser}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
