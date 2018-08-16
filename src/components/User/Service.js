import React from 'react';

import './Service.css';

const Service = (props) => {
  const Element = props.element || 'select';
  return (
        <Element
          value={props.input.name}
          {...props.input}
        >
          {props.children}
        </Element>
  );
};

export default Service;