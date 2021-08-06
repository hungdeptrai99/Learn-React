import React, { useEffect } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { path } from "../App";
export default function Header() {
  const history = useHistory()
  const location = useLocation()
  // console.log(history);
  // useEffect(() => {
  //   console.log(location);
  // },[location])
  return (
    <div>
      <ul>
        <li>
          <Link to={path.home}> Home</Link>
        </li>
        <li>
          <Link to={path.register}> Register</Link>
        </li>
        <li>
          <Link to={path.student}> Student</Link>
        </li>
        <li>
          <Link to={path.profile}> Profile</Link>
        </li>
        <button onClick={() => history.push(path.profile)}>
          chuyen sang profile
        </button>
        <button onClick={() => history.goBack()}>
          chuyen  goback
        </button>
        <button onClick={() => history.goForward()}>
          chuyen  toi
        </button>
      </ul>
    </div>
  );
}
