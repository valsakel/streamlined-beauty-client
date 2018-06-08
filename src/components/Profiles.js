import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {
  setProfileLocationFilter,
  setProfileServiceFilter,
  clearProfileLocationFilter,
  clearProfileServiceFilter
}
from '../actions/profiles'
import HeaderBar from './HeaderBar';
import { fetchProfiles, populateProfilesClear } from '../actions/profiles';
import './Profiles.css';
import placeholder_person from '../images/placeholder_person.jpg';

class Profiles extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProfiles());
  }

  componentWillUnmount() {
    this.props.dispatch(clearProfileLocationFilter());
    this.props.dispatch(clearProfileServiceFilter());
  };

  onLocationChange = e => {
    this.props.dispatch(setProfileLocationFilter(e.target.value))
  };

  onServiceChange = e => {
    this.props.dispatch(setProfileServiceFilter(e.target.value))
  };

  render() {
    const filterByLocation = user => {
      return user.location === this.props.filteredLocation || this.props.filteredLocation === 'Pick a location';
    };

    const filterByService = user => {
      return user.service_type === this.props.filteredServiceType || this.props.filteredServiceType === 'Pick a pro';
    };

    const users = this.props.data.filter(filterByLocation).filter(filterByService).map((user, ind) => (
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
                onClick={this.props.dispatch(populateProfilesClear)}
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
        {this.props.error &&
        <div className="error-bar" aria-live="polite">{this.props.error}</div>
        }
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
    filteredServiceType: state.profiles.filteredServiceType,
    error: state.profiles.error
  }
};

export default connect(mapStateToProps)(Profiles);