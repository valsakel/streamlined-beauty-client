import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SignUpPage from './Routes/SignUpPage';

import SignUpForm from './Forms/SignUpForm'
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/signup" component={SignUpPage} />
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
