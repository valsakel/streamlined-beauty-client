import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Index from './Layout/index';
import Profiles from './Profiles';
import Profile from './Profile';
import NavbarCollapseMenu from './Layout/NavbarCollapseMenu';
import SignUpPage from './Routes/SignUpPage';
import SignInPage from './Routes/SignInPage';
import Dashboard from './Routes/Dashboard';


import LandingPage from './LandingPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profiles" component={Profiles}/>
        <Route path="/profiles/:profileId" component={Profile}/>
        {/*<Route exact path="/signup" component={SignUpPage} />*/}
        {/*<Route exact path="/signin" component={SignInPage} />*/}
        {/*<Route exact path="/menu" component={NavbarCollapseMenu} />*/}
        {/*<Route exact path="/dashboard/:id" component={Dashboard} />*/}

      </div>
    );
  }
}

export default App;
