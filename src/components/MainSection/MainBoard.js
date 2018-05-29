import React from 'react';
import List from './List';


class MainBoard extends React.Component {
  render() {
    return (
      <main className="main-dashboard">
        Hello Main board
        <List />

      </main>
    )
  }
}

export default MainBoard;