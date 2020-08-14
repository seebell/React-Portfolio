import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Wrapper from './Components/Wrapper';



function App() {
  return (
    <Wrapper>
          <BrowserRouter>
          <Nav/>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </BrowserRouter>
          <Footer>
            <p> © Sibel Cidem 2020 </p>
          </Footer>
          </Wrapper> 
      
  );
}

export default App;
