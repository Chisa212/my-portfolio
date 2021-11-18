import React from "react";
import Home from "./top/home.js";
import Main from "./top/main.js";
import Skill from "./top/skill.js";
import Works from "./top/works.js";
import Contact from "./top/contact.js";
import "../styles/layout.css";
import Post from "./wrk/mv/post.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
      <div className="main-Layout">
        <Switch>
          <Route path="/wr1_yugu">
            <Home />
          </Route>
          <Route path="/post">
            <Post title="props"/>
          </Route>
          <Route exact path="/">
            <Home />
            <Main />
            <Skill />
            <Works />
          </Route>
        </Switch>

        <Contact />
      </div>
    </Router>
  );
};

export default Layout;
