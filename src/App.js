import Header from './components/header.js';
import Footer from './components/footer.js';
import Hero from './components/hero.js';
import Work1 from './pages/work1.js';
import Firstpage from './pages/firstpage.js';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./styles/App.css"
import { render } from '@testing-library/react';
import "./styles/reset.css"
import Layout from './components/layout.js';

class App extends React.Component {
  render() {
    return (
      <>
      <div id="tp">
      <BrowserRouter>
          <Header />
            <Layout /> 
          <Footer />
        </BrowserRouter>
      </div>
        
      </>
    );
  }
  }
  

export default App;
