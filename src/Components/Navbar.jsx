import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/student">STUDENT</Link>
        </li>
        <li>
          <Link to="/contect">CONTECT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
