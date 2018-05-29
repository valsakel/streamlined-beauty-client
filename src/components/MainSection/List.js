import React from 'react';
import Card from './Card';

class List extends React.Component {
  render() {

    return (
      <React.Fragment>
        <div>Hello List</div>
        <Card />
        <Card />
        <Card />
      </React.Fragment>
    )
  }
};

export default List;