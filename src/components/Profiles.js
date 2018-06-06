import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { Field } from 'redux-form';

import { setProfileLocationFilter, setProfileServiceFilter } from '../actions/profiles'

import HeaderBar from './HeaderBar';


import { fetchProfiles } from '../actions/profiles';

import './Profiles.css';
import {required} from "./Forms/validators";

import placeholder_person from '../images/placeholder_person.jpg';


class Profiles extends React.Component {
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    this.props.dispatch(fetchProfiles());
  }

  onLocationChange = e => {
    console.log('onLocationChange ran', e.target.value);
    this.props.dispatch(setProfileLocationFilter(e.target.value))
    // this.setState({value: event.target.value});
  };

  onServiceChange = e => {
    console.log('onServiceChange ran', e.target.value);
    this.props.dispatch(setProfileServiceFilter(e.target.value))
  };


  handleSubmit = event => {
    console.log('handleSubmit from Profiles ran');
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    console.log(this.props);
    console.log(this.props.data);
    const filterByLocation = (user) => {
      return user.location === this.props.filteredLocation || this.props.filteredLocation === 'Pick a location';
    };

    const users = this.props.data.filter(filterByLocation).map((user, ind) => (
        <section className="data-card-section" key={ind}>
          <article className="data-card-article">
            <header className="data-card-header">
              <div className="data-card-img">
                <img src={placeholder_person} className="data-user-img" alt="placeholder clip art" />
              </div>
              <div className="data-card-info">
                <h3>{user.full_name}</h3>
                <p>{user.service_type}</p>
                <p>{user.location}</p>
              </div>
            </header>
            <section>

            </section>
            <footer>
              <Link
                to={`/profiles/details/${user.user_id}`}
                className="button-link"
                aria-label="Click to view freelancer's profile"
              >
                View profile
              </Link>
              {/*<button>View profile</button>*/}
            </footer>
          </article>
        </section>
      )
    );
    return (
      <React.Fragment>

        <HeaderBar />

        <main className="main-dashboard">
          <div className="main-dashboard-filter-form">
            <form>
              <label>
                <select onChange={this.onLocationChange}>
                  {/*<option value="" selected>select your beverage</option>*/}
                  {this.props.locations.map((location, ind) => (
                    <option value={location} key={ind}>{location}</option>
                  ))}
                </select>
              </label>
              <label>
                <select onChange={this.onServiceChange}>
                  {this.props.serviceTypes.map((service, ind) => (
                    <option value={service} key={ind}>{service}</option>
                  ))}
                </select>
              </label>
            </form>
          </div>
          {users}
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.profiles.data,
    locations: state.profiles.locations,
    filteredLocation: state.profiles.filteredLocation,
    serviceTypes: state.profiles.serviceTypes,
    filteredServiceType: state.profiles.filteredServiceType
  }
};

export default connect(mapStateToProps)(Profiles);