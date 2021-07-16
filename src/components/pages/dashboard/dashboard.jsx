import React from "react";
import "./dashboard.css";
import HeaderLoggedIn from "../../shared/header/header-logged-in";

function Dashboard() {
  return (
    <div>
      <HeaderLoggedIn dashboard="current-page" />
      <span>Dashboard</span>
    </div>
  );
}

export default Dashboard;
