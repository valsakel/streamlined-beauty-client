import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProfileDetails } from '../actions/profileDetails';
import {fetchServices} from '../actions/services';

import HeaderBar from './HeaderBar';

import placeholder_person from '../images/placeholder_person.jpg';


class Profile extends React.Component {
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    console.log(this.props.data);
    console.log(this.props.match.params.user_id);

    this.props.dispatch(fetchProfileDetails(this.props.match.params.user_id));
    this.props.dispatch(fetchServices(this.props.match.params.user_id));
  }

  render() {
    console.log(this.props.user.email);
    console.log(this.props.services);

    return (
      <React.Fragment>
        <HeaderBar />
        <Link to="/profiles">Back to the board</Link>

        <div>
          Hello Profile
        </div>

        <a href={`mailto:${this.props.user.email}?subject=Schedule%20an%20appointment`}>Send email</a>

        <section className="data-card">
          <article>
            <header className="data-card-header">
              <div className="data-card-img">
              <img src={placeholder_person} className="data-user-img" alt="placeholder clip art" />

              </div>
              <div className="data-user-info">
              <h4>{this.props.user.full_name}</h4>
                <p>{this.props.user.service_type}</p>
                <p>{this.props.user.location}</p>

              </div>

            </header>
            <section>
              <div>
                <h4>Service</h4>
                <ul>
                  {this.props.services.map((service, ind) => (<li key={ind}>{service.service}</li>))}
                </ul>
              </div>
              <div>
                <h4>
                  Price
                </h4>
                <ul>
                  {this.props.services.map((service, ind) => (<li key={ind}>{service.price}</li>))}
                </ul>
              </div>

              <ul>


              </ul>
            </section>
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
    user: state.profileDetails.data,
    services: state.services.data
  }
};


export default connect(mapStateToProps)(Profile);