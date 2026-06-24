import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const NavBar : React.FC = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/">
          Home
        </Link>
        <Link to="/products">
          Products
        </Link>
        <Link to="/about">
          About
        </Link>
      <Link to="/contact">
          Contact us
        </Link>
      </li>
    </ul>
  )
}

export default NavBar;  