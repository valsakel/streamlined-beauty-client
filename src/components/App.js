import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderBar from './Header/HeaderBar';
import NavbarCollapseMenu from './Header/NavbarCollapseMenu';
import SignUpPage from './Routes/SignUpPage';
import SignInPage from './Routes/SignInPage';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HeaderBar} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/menu" component={NavbarCollapseMenu} />

        {/*<SignUpForm />*/}
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
