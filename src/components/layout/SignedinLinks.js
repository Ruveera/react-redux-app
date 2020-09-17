import React from "react";
import { NavLink } from "react-router-dom";

function SignedinLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink liten-1">
          RR
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedinLinks;
