import React from 'react';
import './forms.css';


const Fields = props => {
  console.log('Field component rendered');
  const Element = props.element || 'input';
  return (
    <div className="form-field" id={props.id}>
      <label htmlFor={props.input.name}>{props.label}
      <Element
        // id={props.input.name}
        className={(props.meta.error && props.meta.touched) ? 'error-border' : 'placeholder-class'}
        type={props.type}
        value={props.value}
        // placeholder={props.label}
        {...props.input}
      >
        {props.children}
      </Element>
      </label>
      {/*
        If error evaluates to true -> show span element
        if error is undefined -> React ignores the span element
      */}
      {/*{props.meta.dirty &&*/}
      {/*<div>HELLO</div>}*/}

      {props.meta.error &&
        props.meta.touched &&
          <div className="form-error">{props.meta.error}</div>}
    </div>
    // </React.Fragment>
  );
}

export default Fields;