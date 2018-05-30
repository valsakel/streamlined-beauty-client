import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import placeholder_person from '../../images/placeholder_person.jpg';

const Card = (props) => {
  return (
    <section className="card-section">
      <article>
        <header className="card-header">
          <div className="card-user-img">
            <img src={placeholder_person} className="user-img" alt="placeholder clip art" />

          </div>
          <div className="card-user-info">
            <h4>{props.full_name}</h4>
            <p>{props.location}</p>

          </div>

        </header>
        <footer>
          <Link to="/board/id">View profile</Link>
          {/*<button>View profile</button>*/}
        </footer>
      </article>
    </section>
  );
};

  export default Card;
