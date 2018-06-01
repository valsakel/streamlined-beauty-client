import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Profiles from './Profiles';
import Profile from './Profile';


import LandingPage from './LandingPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profiles" component={Profiles}/>
        <Route exact path="/profiles/:profileId" component={Profile}/>
        {/*<Route exact path="/signup" component={SignUpPage} />*/}
        {/*<Route exact path="/signin" component={SignInPage} />*/}
        {/*<Route exact path="/menu" component={NavbarCollapseMenu} />*/}
        {/*<Route exact path="/dashboard/:id" component={Dashboard} />*/}

      </div>
    );
  }
}

export default App;
