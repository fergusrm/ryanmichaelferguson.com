import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/resume" component={Resume}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
