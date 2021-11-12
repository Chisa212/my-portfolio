import React from "react";
import Home from './top/home.js';
import Main from './top/main.js';
import Skill from './top/skill.js';
import Works from './top/works.js';
import Contact from './top/contact.js';
import "../styles/layout.css"

const Layout = () => {
  return (
    <div className ="main-Layout">
      <Home />
      <Main />
      <Skill />
      <Works />
      <Contact />
    </div>
  )
}

export default Layout