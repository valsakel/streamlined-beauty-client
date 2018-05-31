import React from 'react';

import './Service.css';

const Service = (props) => {
  console.log('Service component rendered');
  const Element = props.element || 'select';
  console.log(props.input.name);
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