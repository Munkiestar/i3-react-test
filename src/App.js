import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import AboutUs from './components/pages/About/AboutUs';
import Services from './components/pages/Services';
import Development from './components/pages/Delevlopment';
import Design from './components/pages/Design';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>  
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/services" exact component={Services} />
        <Route path="/development" exact component={Development} />
        <Route path="/design" exact component={Design} />
        <Route path="/marketing" exact component={Marketing} />
        <Route path="/consulting" exact component={Consulting} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
