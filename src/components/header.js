import React from "react";
import "../styles/header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <header>
            <div className = "main-header">
                {/* <Link to = "/page1">
                <h1>page1</h1>
                </Link> */}
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
               
                
            </div>
        </header>
    )
}

export default Header