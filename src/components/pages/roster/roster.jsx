import React, {useEffect, useState} from "react";
import "./roster.css";
import Axios from "axios";
import HeaderLoggedIn from "../../shared/header/header-logged-in";

function Roster() {
  const [jobs, setJobs] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/job/list").then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div>
      <HeaderLoggedIn />

      {jobs.map((value, key) => {
        return (
          <div key={key}>
            <p>{value.job}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Roster;
