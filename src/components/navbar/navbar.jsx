import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink exact className="navbar-brand" to="/">
            Apex Stats
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/stats"
                >
                  Stats
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                {/* <Route> */}
                <a
                  className={
                    "nav-link dropdown-toggle " +
                    (useLocation().pathname === "/settings/config-user"
                      ? "active"
                      : "")
                  }
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Settings
                </a>
                {/* </Route> */}
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="nav-link" to="/settings/config-user">
                    Configure User
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
