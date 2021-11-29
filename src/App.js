import Footer from "./components/footer.js";
import React from "react";
import { BrowserRouter} from "react-router-dom";
import "./styles/App.css";
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
