import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="nav flex-column nav-pills">
      <NavLink to="/shows" className="nav-link" activeClassName="active">
        Shows
      </NavLink>
      <NavLink to="/favorites" className="nav-link" activeClassName="active">
        Favorites
      </NavLink>
    </div>
  );
}

export default Sidebar;
