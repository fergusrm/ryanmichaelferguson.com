import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home';

import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={styles.mainContent} data-testid="main-content">
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
