import React from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import HeaderBar from './HeaderBar';

import placeholder_person from '../images/placeholder_person.jpg';

import { fetchProfiles } from '../actions/profiles';

import './Profiles.css';

class Profiles extends React.Component {
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    this.props.dispatch(fetchProfiles());
  }

  render() {
    console.log(this.props);

    const users = this.props.data.map((user, ind) => (
        <section className="data-card" key={ind}>
          <article>
            <header className="data-card-header">
              <div className="data-card-img">
                <img src={placeholder_person} className="data-user-img" alt="placeholder clip art" />

              </div>
              <div className="data-user-info">
                <h4>{user.full_name}</h4>
                <p>{user.service_type}</p>
                <p>{user.location}</p>

              </div>

            </header>
            <section>

            </section>
            <footer>
              <Link to={`/profiles/details/${user.user_id}`}>View profile</Link>
              {/*<button>View profile</button>*/}
            </footer>
          </article>
        </section>
      )
    );
    console.log(this.props.data);
    return (
      <React.Fragment>
        <HeaderBar />
        <main className="main-dashboard">
          {users}
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.profiles.data
  }
};

export default connect(mapStateToProps)(Profiles);