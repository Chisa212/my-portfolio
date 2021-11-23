import React from "react";
import Home from "./top/home.js";
import Main from "./top/main.js";
import Skill from "./top/skill.js";
import Works from "./top/works.js";
import Contact from "./top/contact.js";
import "../styles/layout.css";
import Post from "./post.js";
import Header from '../components/header';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
      <div className="main-Layout">
        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route exact path="/">
            <Header/>
            <Home />
            <Main />
            <Skill />
            <Works />
            <Contact />
          </Route>
        </Switch>

        
      </div>
    </Router>
  );
};

export default Layout;
