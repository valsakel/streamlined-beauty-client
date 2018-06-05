import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProfileDetails, fetchServices } from '../actions/profile';

import HeaderBar from './HeaderBar';

import './Profile.css';
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
        <main className="main-dashboard">
        <div className="return-link-section">
          <Link
            to="/profiles"
            aria-label="Click to return to the board"
          > &larr; &ensp; Back to the board</Link>
        </div>


        <section className="data-card-section">
          <a
            href={`mailto:${this.props.user.email}?subject=Schedule%20an%20appointment`}
            className="button-link"
            aria-label="Click to send an email"
          >
            Send email
          </a>
          <article className="data-card-article">
            <header className="data-card-header">
              <div className="data-card-img">
              <img src={placeholder_person} className="data-user-img" alt="placeholder clip art" />

              </div>
              <div className="data-card-info">
              <h3>{this.props.user.full_name}</h3>
                <p>{this.props.user.service_type}</p>
                <p>{this.props.user.location}</p>

              </div>

            </header>
            <section className="data-card-services">
              <h3 className="data-card-services-header">Services</h3>
              <div className="data-card-services-section">
                <div>
                  {/*<h4 className="data-card-services-header">Service</h4>*/}
                  <ul>
                    {this.props.services.map((service, ind) => (<li key={ind}>{service.service}</li>))}
                  </ul>
                </div>
                <div>
                  {/*<h4 className="data-card-services-header">*/}
                  {/*Price*/}
                  {/*</h4 >*/}
                  <ul>
                    {this.props.services.map((service, ind) => (<li key={ind}>${service.price}</li>))}
                  </ul>
                </div>
              </div>



            </section>
            <footer>
              {/*<Link to={`/profiles/profile${this.props.user.id}`}>View profile</Link>*/}
              {/*<button>View profile</button>*/}
            </footer>
          </article>
        </section>

        </main>
      </React.Fragment>


    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.profile.data,
    services: state.services.data
  }
};


export default connect(mapStateToProps)(Profile);