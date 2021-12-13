import React from "react";
import "../styles/header.css";
import Home1 from '../../src/img/Home/IMG_5683.jpg'

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
              <a href="#ct"> Contact</a>
             
            </p>
          </li>
        </ul>
      </div>
      <img className="Home1"src={Home1} alt=""/>
    </header>
     
    
  );
};

export default Header;
