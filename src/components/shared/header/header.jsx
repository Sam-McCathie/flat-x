import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

function header() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li className="header-link">Home</li>
        </Link>
        <li className="header-link">Road Map</li>
        <li className="header-link">Features</li>
        <Link to="/login">
          <li className="header-link">Login</li>
        </Link>
        <Link to="/register">
          <li className="header-link">Register</li>
        </Link>
      </ul>
    </div>
  );
}

export default header;
