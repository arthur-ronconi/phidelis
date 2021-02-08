import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("/dashboard")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <img src="/img/Logo.png" alt="Phidelis" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mr-0 mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary rounded-pill px-3 text-white"
                to="/login"
              >
                {isLogged ? "Sair" : "Login"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
