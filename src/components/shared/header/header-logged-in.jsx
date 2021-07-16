import React from "react";
import "./header-logged-in.css";
import {Link} from "react-router-dom";

//Convert to reusable prop

function headerLoggedIn(props) {
  return (
    <div className="logged-in-header">
      <div className="logged-in-header-links">
        <div className="logged-in-link-button">
          <Link to="/dashboard">
            <p className={`logged-in-header-link ${props.dashboard}`}>
              Dashboard
            </p>
          </Link>
        </div>
        <div className="logged-in-link-button">
          <Link to="/my-flat">
            <p className={`logged-in-header-link ${props.flat}`}>My Flat</p>
          </Link>
        </div>
        <div className="logged-in-link-button">
          <Link to="/my-profile">
            <p className={`logged-in-header-link ${props.profile}`}>
              My Profile
            </p>
          </Link>
        </div>
        <div>
          <div className="logged-in-link-button">
            <Link to="/">
              <p className="logged-in-header-link">Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default headerLoggedIn;
