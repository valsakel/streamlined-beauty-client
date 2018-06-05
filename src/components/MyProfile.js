import React from 'react';
import { connect } from 'react-redux';

import RequiresLogin from './RequiresLogin';

import HeaderBar from './HeaderBar';
import MyProfileAccountForm from './MyProfileAccountForm';

import {
  editProfileAccountStart,
  fetchMyProfileDetails,
  addProfileServices,
  postMyProfileService,
  editProfileServicesStart,
  editProfileServicesEnd,
}
from '../actions/myProfileActions';

import { fetchServices } from '../actions/profile';

import './MyProfile.css';
import placeholder_person from '../images/placeholder_person.jpg';




class MyProfile extends React.Component {
  componentDidMount() {
    console.log('MyProfile did mount');
    console.log(this.props);
    this.props.dispatch(fetchMyProfileDetails());
    this.props.dispatch(fetchServices(this.props.user.user_id));

  }
  onEditAccount = e => {
    // e.preventDefault;
    console.log('onEditSubmit ran');
  };

  onServiceChange = (e) => {
    if (e.target.value !== 'Pick a service') {
      this.props.dispatch(addProfileServices(e.target.value));
    }
    // this.target.value !== 'Pick a service' && addProfileServices()
  };

  addNewService = (e) => {
    e.preventDefault();
    // this.props.dispatch(addProfileServices(service));
    const service = {
      user_id: this.props.user.user_id,
      service: this.props.addedServices[0],
      price: 100
    };
    console.log('addNewService OBJECT', service);
    this.props.dispatch(postMyProfileService(service));
  };

  render() {
    console.log(this.props.user);
    return (
      <React.Fragment>
        <HeaderBar />
        <main className="main-dashboard">


          {this.props.editAccount
            ?
            <MyProfileAccountForm />
            :
            <section className="my-profile-section">
              <h2>
                My Profile
              </h2>
              <section className="my-profile-account">
                <h2>Account</h2>
                <main className="card-header data-card-header">
                  <div className="card-user-img data-card-img">
                    <img src={placeholder_person} className="data-user-img" alt="placeholder clip art" />
                  </div>
                  <div className="my-profile-account-info">
                    <h3>{this.props.user.full_name}</h3>
                    <p>{this.props.user.location}</p>
                    <p>{this.props.user.service_type}</p>
                    <p>{this.props.user.email}</p>
                  </div>
                  <div className="my-profile-edit-btn-section">
                    <button className="profile-edit-btn" type="button" onClick={() => this.props.dispatch(editProfileAccountStart())}>Edit</button>
                  </div>
                </main>
              </section>
              <section className="my-profile-services my-profile-account">
                <h2>Services</h2>
                <div className="my-profile-services-section">
                  <div>
                    <h4 className="data-card-services-header">Service</h4>
                    <ul>
                      {this.props.userServices.map((service, ind) => (<li key={ind}>{service.service}</li>))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="data-card-services-header">
                    Price
                    </h4 >
                    <ul>
                      {this.props.userServices.map((service, ind) => (<li key={ind}>${service.price}</li>))}
                    </ul>
                  </div>

                </div>
                {this.props.editServices
                  ?
                  <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                    <label>
                      <select onChange={this.onServiceChange}>
                        {this.props.filterServices.map((service, ind) => (
                        <option value={service} key={ind}>{service}</option>
                          ))}
                      </select>
                    </label>
                    <button onClick={this.addNewService}>Add</button>
                    <button type="button" onClick={() => this.props.dispatch(editProfileServicesEnd())}>
                      Cancel
                    </button>
                  </form>
                  :
                  <div>
                    <a
                      href="#"
                      onClick={() => this.props.dispatch(editProfileServicesStart())}
                      className="my-profile-add-service-link"
                      aria-label="Click to add a new service"
                    >
                      Add a service ...
                    </a>
                  </div>
                }






              </section>
            </section>
          }

        </main>
      </React.Fragment>

    )
  }
}

const mapStateToProps = state => {
  // const currentUser = state.main_dashboard.data[2];
  return {
    editAccount: state.myProfile.editAccount,
    editServices: state.myProfilesServices.editServices,
    user: state.auth.currentUser,
    userServices: state.services.data,
    filterServices: state.services.services,
    addedServices: state.myProfilesServices.data

    // email: state.auth.currentUser.email,


    // data: state.main_dashboard.data
  }
};

export default RequiresLogin()(connect(mapStateToProps)(MyProfile));