import React from "react";
import "./home.css";

import Header from "../../shared/header/header";
import HomeButton from "./home-button";

function home() {
  return (
    <div>
      <Header home="current-page" />
      <div className="home-body">
        <div>
          <h1 className="home-header">Flat X</h1>
          <HomeButton linkTo="/login" buttonText="Login" />
          <HomeButton linkTo="/register" buttonText="Register" />
        </div>
      </div>
    </div>
  );
}

export default home;
