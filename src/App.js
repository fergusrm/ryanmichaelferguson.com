import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
//import About from './components/About';
//import Contact from './components/Contact';
import Resume from './components/Resume';
import styles from './App.module.scss';

function App() {
  var currentYear = new Date().getFullYear();

  return (
    <>
      <BrowserRouter>
        <div>
          <nav class={styles.navigation}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/resume">Resume</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      <footer class={styles.footerBar}>
        <div class={styles.copyright}>{`\u00A9${currentYear} All rights reserved.`}</div>
      </footer>
    </>
  );
}

export default App;
