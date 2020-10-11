import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./assets/resume/ferguson_resume.pdf";
import styles from "./App.module.scss";

function App() {
  var currentYear = new Date().getFullYear();

  return (
    <>
      <BrowserRouter>
        <div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <a href={Resume}>Resume</a>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      <footer className={styles.footerBar}>
        <div
          className={styles.copyright}
        >{`\u00A9${currentYear} All rights reserved.`}</div>
      </footer>
    </>
  );
}

export default App;
