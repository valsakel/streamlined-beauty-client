import React from 'react';
import {connect} from "react-redux";

const Card = (props) => {
  return (
    <article className="freelancer-card">
      <header>
        {props.full_name}
      </header>
      <button>Send email</button>
    </article>
  )
};

export default Card;
