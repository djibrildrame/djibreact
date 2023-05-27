import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="add2" to="/add">
            Add Techno
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/All">All Technos</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
