import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderBar from './Header/HeaderBar';
import Board from './Routes/Board';
import NavbarCollapseMenu from './Header/NavbarCollapseMenu';
import SignUpPage from './Routes/SignUpPage';
import SignInPage from './Routes/SignInPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HeaderBar} />
        <Route path="/board" component={Board}/>
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/menu" component={NavbarCollapseMenu} />

      </div>
    );
  }
}

export default App;
