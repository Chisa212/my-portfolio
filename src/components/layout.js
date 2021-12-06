import React from "react";
import Home from "./top/home.js";
import Main from "./top/main.js";
import Skill from "./top/skill.js";
import Works from "./top/works.js";
import Contact from "./top/contact.js";
import "../styles/layout.css";
import Post from "./post.js";
import Header from '../components/header';
import Worksheader from "./works-header.js";
import ScrollToTop from "./scrollToTop";
import SEO from "./seo.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
       <ScrollToTop/>
      <div className="main-Layout">
        <Switch>
          <Route path="/post" onEnter = {() =>{
                    window.scroll(0, 0); //ページの一番上に移動
                  }}>
            <Worksheader />
            <Post />
          </Route>
          <Route exact path="/" onEnter={ () =>{
                    window.scroll(0, 0); //ページの一番上に移動
                  } }>
            <SEO title="Chisa" description="古川稚彩のポートフォリオサイトです."/>
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

