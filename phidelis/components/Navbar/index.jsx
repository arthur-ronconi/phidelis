import styles from "./Navbar.module.scss";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles.customNavbar}`}
    >
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img src="/img/Logo.png" alt="Phidelis" />
          </a>
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ml-3">
              <a
                className="nav-link btn btn-primary text-white px-4 rounded-pill"
                href="#"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
