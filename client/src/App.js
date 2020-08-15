import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Wrapper from './Components/Wrapper';
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";



function App() {
  return (
    <Wrapper>
          <Router>
          <Nav/>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Router>
          <Footer>
            <p> © Sibel Cidem 2020 </p>
          </Footer>
          </Wrapper> 
      
  );
}

export default App;
