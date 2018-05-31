import React from 'react';
import HeaderBar from './HeaderBar';


const Index = Child => props => {
  return (
    <React.Fragment>
      <HeaderBar />
      <Child />

    </React.Fragment>
  )
};

export default Index;