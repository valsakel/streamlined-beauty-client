import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderBar from '../Header/HeaderBar';
import MainBoard from '../Board/MainBoard';
import UserProfile from '../Board/UserProfile';

const Board = () => {
  return (
    <React.Fragment>
      <HeaderBar />
      <Switch>
        <Route exact path="/board" component={MainBoard} />
        <Route path="/board/:id" component={UserProfile} />
      </Switch>
    </React.Fragment>
  )
};

export default Board;