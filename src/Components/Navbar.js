import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="Link">
        <h1>IMDB</h1>
      </Link>

      <div className="list-container">
        <ul className="ul">
          <li className="list-item">
            <h2>Movies</h2>
          </li>
          <li className="list-item">
            <h2>About</h2>
          </li>
          <li className="list-item">
            <h2>Contact</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
