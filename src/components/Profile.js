import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfileDetails } from '../actions/profileDetails';
import HeaderBar from './HeaderBar';

import placeholder_person from '../images/placeholder_person.jpg';


class Profile extends React.Component {
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    console.log(this.props);
    console.log(this.props.match.params.profileId);
    this.props.dispatch(fetchProfileDetails(this.props.match.params.profileId));
  }

  render() {
    return (
      <React.Fragment>
        <HeaderBar />
        <Link to="/profiles">Back to the board</Link>

        <div>
          Hello Profile
        </div>

        <section className="data-card">
          <article>
            <header className="data-card-header">
              <div className="data-card-img">
              <img src={placeholder_person} className="data-user-img" alt="placeholder clip art" />

              </div>
              <div className="data-user-info">
              <h4>{this.props.user.full_name}</h4>
              <p>{this.props.user.location}</p>

              </div>

            </header>
            <footer>
              {/*<Link to={`/profiles/profile${this.props.user.id}`}>View profile</Link>*/}
              {/*<button>View profile</button>*/}
            </footer>
          </article>
        </section>


      </React.Fragment>


    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.profileDetails.data
  }
};


export default connect(mapStateToProps)(Profile);