import React from "react";
import "./home-button.css";
import {Link} from "react-router-dom";

function homeButton(props) {
  return (
    <div className="button-container">
      <Link to={props.linkTo}>
        <div className="home-button">
          <h3 className="home-button-text">{props.buttonText}</h3>
        </div>
      </Link>
    </div>
  );
}

export default homeButton;
