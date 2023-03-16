import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "./Parent";

function NavBar() {
  const { state } = useContext(AppContext);

  return (
    <>
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
                  to="/auth/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark position-relative"
                  to="/auth/settings"
                >
                  Settings
                </Link>
              </li>
              {/* conditionally displaying the log in and sign up link (in case no user is log in) */}
              {!state.user ? (
                <>
                  <li>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/login"
                    >
                      Log In
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;
