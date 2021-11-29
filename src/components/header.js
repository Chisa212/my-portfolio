import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="main-header">
        <ul>
          <li className="hd">
            <p>
              <a href="#tp">Home</a>
            </p>
          </li>
          <li className="hd">
            <p>
              <a href="#Mn">About</a>
            </p>
          </li>
          <li className="hd">
            <p>
              <a href="#sl">Skill</a>
            </p>
          </li>
          <li className="hd">
            <p>
              <a href="#wr">Works</a>
            </p>
          </li>
          <li className="hd">
            <p>
              Contact
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
