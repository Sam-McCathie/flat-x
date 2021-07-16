import React, {useEffect, useState} from "react";
import Axios from "axios";
import "./dashboard.css";
import HeaderLoggedIn from "../../shared/header/header-logged-in";

function Dashboard() {
  const [user, setUser] = useState("");
  const [flat, setFlat] = useState("");

  //GET username
  useEffect(() => {
    Axios.get("http://localhost:3001/api/user/current").then((response) => {
      setUser(response.data[0]);
    });
  }, []);

  // GET flat name
  useEffect(() => {
    Axios.get("http://localhost:3001/api/flat/list").then((response) => {
      setFlat(response.data[0]);
    });
  }, []);

  return (
    <div>
      <HeaderLoggedIn dashboard="current-page" />
      <div>
        <h1>Dashboard</h1>
        <p>Welcome: {user.username}</p>
        <p>My flat: {flat.flatName}</p>
      </div>
    </div>
  );
}

export default Dashboard;
