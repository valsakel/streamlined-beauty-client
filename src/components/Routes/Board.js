import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderBar from '../Layout/HeaderBar';
import MainBoard from '../Profiles/Profiles';
import Profile from '../demoProfile/Profile';

const Board = () => {
  return (
    <React.Fragment>
      <HeaderBar />
      <Switch>
        <Route exact path="/board" component={MainBoard} />
        <Route path="/board/:id" component={Profile} />
      </Switch>
    </React.Fragment>
  )
};

export default Board;