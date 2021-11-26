import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Hero from "./components/hero.js";
import Work1 from "./pages/work1.js";
import Firstpage from "./pages/firstpage.js";
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styles/App.css";
import { render } from "@testing-library/react";
import "./styles/reset.css";
import Layout from "./components/layout.js";
// import NotFound from "../src/NotFound.js";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          {/* <link rel="stylesheet" type="text/css" href="http://mplus-fonts.sourceforge.jp/webfonts/general-j/mplus_webfonts.css"></link>
<link rel="stylesheet" type="text/css" href="http://mplus-fonts.sourceforge.jp/webfonts/basic_latin/mplus_webfonts.css"></link> */}
          <link
            href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c"
            rel="stylesheet"
          ></link>
          <div id="tp">
            <BrowserRouter>
              <Layout />
              <Footer />
            </BrowserRouter>
          </div>
        </div>
      </>
    );
  }
}

export default App;
