import React, { useState } from "react";

const Profile = ({ setNav, clearData }) => {
  return (
    <div className="profile-container">
      <div className="profile">
        <h3>{JSON.parse(localStorage.user).name}</h3>
        <ul>
          <li>
            <h5>Today's Tasks</h5>
          </li>
          <li>
            <p onClick={() => setNav("tasks")}>
              All Tasks <span>&#10097;</span>
            </p>
          </li>
          <li>
            <p onClick={() => setNav("complete")}>
              Completed<span>&#10097;</span>
            </p>
          </li>
          <li>
            <p onClick={() => setNav("uncomplete")}>
              Uncompleted<span>&#10097;</span>
            </p>
          </li>
          <li>
            <p onClick={() => setNav("addTask")}>
              Add Task <span>&#10097;</span>
            </p>
          </li>
          <li>
            <p onClick={() => clearData()}>
              Clear Data<span>&#10097;</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
