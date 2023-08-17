import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Employee Management App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li>
              {isAuthenticated && <a className="navbar-brand">{user.name}</a>}
            </li>
            {isAuthenticated ? (
              <li>
                {" "}
                <button
                  className="btn btn-outline-danger my-2 my-sm-0"
                  type="submit"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
