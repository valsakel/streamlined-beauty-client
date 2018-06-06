import React from 'react';
import { connect } from 'react-redux';

import { requireService } from './Forms/validators';
import RequiresLogin from './RequiresLogin';

import HeaderBar from './HeaderBar';
import MyProfileAccountForm from './MyProfileAccountForm';

import {
  editProfileAccountStart,
  fetchMyProfileDetails,
  setMyProfileServiceValChange,
  clearMyProfileServiceValChange,
  errorMyProfileServiceValChange,
  deleteMyProfileService,
  setMyProfilePriceValChange,
  clearMyProfilePriceValChange,

  postMyProfileService,
  editProfileServicesStart,
  editProfileServicesEnd
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

  onServiceValChange = (e) => {
    console.log(e.target.value);

    this.props.dispatch(setMyProfileServiceValChange(e.target.value));
  };

  onPriceValChange = (e) => {
    console.log(e.target.value);
    this.props.dispatch(setMyProfilePriceValChange(e.target.value));
  };


  addNewService = (e) => {
    e.preventDefault();
    // this.props.dispatch(setMyProfileServiceValChange(service));
    if (this.props.serviceVal === 'Pick a service') {
      return this.props.dispatch(errorMyProfileServiceValChange('Required field'));
    }
    console.log('PRICE', this.props.priceVal);
    const service = {
      user_id: this.props.user.user_id,
      service: this.props.serviceVal,
      price: this.props.priceVal
    };
    console.log('addNewService OBJECT', service);
    this.props.dispatch(postMyProfileService(service));
    document.getElementById("my-profile-add-services-form").reset();
    this.props.dispatch(clearMyProfileServiceValChange());
    this.props.dispatch(clearMyProfilePriceValChange());

  };

  onServiceDelete = (e) => {
    e.preventDefault();
    console.log('onServiceDelete ran', e.target.getAttribute('data-service-id'));
    this.props.dispatch(deleteMyProfileService(e.target.getAttribute('data-service-id')));

  };

  render() {

    console.log(this.props.user);
    return (
      <React.Fragment>
        <HeaderBar />
        {this.props.error &&
        <div className="error-bar">{this.props.error}</div>
        }
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
                  {/*<div className="my-profile-edit-btn-section">*/}
                    {/*<button className="profile-edit-btn" type="button" onClick={() => this.props.dispatch(editProfileAccountStart())}>Edit</button>*/}
                  {/*</div>*/}
                </main>
              </section>
              <section className="my-profile-services my-profile-account">
                <h2>Services</h2>
                <div className="my-profile-services-section">
                  <div>
                    {/*<h4 className="data-card-services-header">Service</h4>*/}
                    <ul>
                      {this.props.userServices.map((service, ind) => (<li key={ind}>{service.service}</li>))}
                    </ul>
                  </div>
                  <div>
                    {/*<h4 className="data-card-services-header">Price</h4 >*/}
                    <ul>
                      {this.props.userServices.map((service, ind) => (<li key={ind}>${service.price}</li>))}
                    </ul>
                  </div>
                    <div>
                        {/*<h4 className="data-card-services-header">Price</h4 >*/}
                        <ul>
                            {this.props.userServices.map((service, ind) => (
                                <button
                                  className="my-profile-destroy-service"
                                  onClick={this.onServiceDelete}
                                  type="submit"
                                  aria-label={`Click to delete ${service.service} service`}
                                  data-service-id={service.id}
                                  key={service.id}
                                >
                                </button>)
                            )}
                        </ul>
                    </div>

                </div>
                {this.props.editServices
                  ?
                  <div>
                    <form id="my-profile-add-services-form">
                      {this.props.error === 'Required field' &&
                      <div className="service-form-error" aria-live="polite">{this.props.error}</div>}
                      <label className="my-profile-service-label">
                        {/*Service*/}
                        <select
                          onChange={this.onServiceValChange}
                          className="my-profile-add-services-form-field"
                        >
                          {this.props.filterServices.map((service, ind) => (
                            <option value={service} key={ind}>{service}</option>
                          ))}
                        </select>
                      </label>
                      <label className="my-profile-price-label">
                        {/*Price*/}
                        <input
                          onChange={this.onPriceValChange}
                          id="my-profile-price-input"
                          type="number"
                          placeholder="$$$"
                          className="my-profile-add-services-form-field"
                        />
                      </label>
                    <button type="submit" onClick={this.addNewService}>Add</button>
                    <button type="button" onClick={() => this.props.dispatch(editProfileServicesEnd())}>
                      Cancel
                    </button>
                    </form>
                  </div>
                  :
                  <div>
                    <a
                      href="#"
                      onClick={() => this.props.dispatch(editProfileServicesStart())}
                      className="my-profile-add-services-link"
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
    serviceVal: state.myProfilesServices.serviceVal,
    priceVal: state.myProfilesServices.priceVal,
    error: state.myProfilesServices.error

    // email: state.auth.currentUser.email,


    // data: state.main_dashboard.data
  }
};

export default RequiresLogin()(connect(mapStateToProps)(MyProfile));