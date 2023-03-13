import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <header className="header border border-bottom position-sticky top-0">
      <nav className="navbar navbar-light bg-white py-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-shop"></i>
            <span>OneStopShop</span>
          </Link>
          <ul className="list-unstyled d-flex align-items-center gap-3 mb-0">
            <li>
              <Link
                className="text-decoration-none text-dark position-relative"
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none text-dark position-relative"
                to="/settings"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-dark" to="/signup">
                Sign Up
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-dark" to="/login">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
