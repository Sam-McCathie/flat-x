import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

function header(props) {
  return (
    <div className="header">
      <div className="header-links">
        <div className="link-button">
          <Link to="/">
            <p className={`header-link ${props.home}`}>Home</p>
          </Link>
        </div>
        <div className="link-button">
          <p className={`header-link ${props.roadMap}`}>Road Map</p>
        </div>
        <div className="link-button">
          <p className={`header-link ${props.features}`}>Features</p>
        </div>
        <div className="link-button">
          <Link to="/login">
            <p className={`header-link ${props.login}`}>Login</p>
          </Link>
        </div>
        <div>
          <div className="link-button">
            <Link to="/register">
              <p className={`header-link ${props.register}`}>Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
