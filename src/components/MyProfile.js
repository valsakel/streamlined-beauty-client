import React from 'react';
import { connect } from 'react-redux';

import RequiresLogin from './RequiresLogin';

import HeaderBar from './HeaderBar';

import {
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
    this.props.dispatch(fetchMyProfileDetails());
    this.props.dispatch(fetchServices(this.props.user.user_id));
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.profileError || nextProp.servicesError) {
      console.log(nextProp.profileError);
      console.log(nextProp.servicesError);
      document.getElementById('top').scrollIntoView();
    }
  }

  onServiceValChange = (e) => {
    this.props.dispatch(setMyProfileServiceValChange(e.target.value));
  };

  onPriceValChange = (e) => {
    this.props.dispatch(setMyProfilePriceValChange(e.target.value));
  };


  addNewService = (e) => {
    e.preventDefault();
    // this.props.dispatch(setMyProfileServiceValChange(service));
    if (this.props.serviceVal === 'Pick a service') {
      return this.props.dispatch(errorMyProfileServiceValChange('Required field'));
    }
    const service = {
      user_id: this.props.user.user_id,
      service: this.props.serviceVal,
      price: this.props.priceVal
    };
    this.props.dispatch(postMyProfileService(service));
    document.getElementById("my-profile-add-services-form").reset();
    this.props.dispatch(clearMyProfileServiceValChange());
    this.props.dispatch(clearMyProfilePriceValChange());
    this.refs.selectService.focus();
  };

  onServiceDelete = (e) => {
    e.preventDefault();
    this.props.dispatch(deleteMyProfileService(e.target.getAttribute('data-service-id')));
  };

  render() {
    let loader;
    if (this.props.loading) {
      loader = (
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }

    return (
      <React.Fragment>
        {loader}
        <HeaderBar />
        {this.props.error &&
        <div className="error-bar" aria-live="polite" role="alert">{this.props.error}</div>
        }
        <main className="main-dashboard">
          <section className="my-profile-section">
            <h1>
              My Profile
            </h1>
            <section className="my-profile-account">
              <h2>Account</h2>
              <div className="card-header data-card-header">
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
              </div>
            </section>
            <section className="my-profile-services my-profile-account">
              <h2>Services</h2>
              <div className="my-profile-services-section">
                <div>
                  <ul>
                    {this.props.userServices.map((service, ind) => (<li key={ind}>{service.service}</li>))}
                  </ul>
                </div>
                <div>
                  <ul>
                    {this.props.userServices.map((service, ind) => (<li key={ind}>${service.price}</li>))}
                  </ul>
                </div>
                <div>
                  <div className="my-profile-services-remove-section">
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
                  </div>
                </div>
              </div>
              {this.props.editServices
                ?
                <div aria-expanded={this.props.editServices}>
                  <form id="my-profile-add-services-form">
                    {this.props.error === 'Required field' &&
                    <div className="service-form-error" aria-live="polite">{this.props.error}</div>}
                    <label className="my-profile-service-list-field">
                      {/*Service*/}
                      <select
                        onChange={this.onServiceValChange}
                        // className="my-profile-add-services-form-field"
                        aria-label="Pick a location"
                        ref="selectService"
                        autoFocus
                      >
                        {this.props.filterServices.map((service, ind) => (
                          <option value={service} key={ind}>{service}</option>
                        ))}
                      </select>
                    </label>
                    <label className="my-profile-service-price-field">
                      {/*Price*/}
                      <input
                        onChange={this.onPriceValChange}
                        type="number"
                        placeholder="$$$"
                        title="Price"
                        aria-label="Service price"
                      />
                    </label>
                    <button
                      className="form-btn"
                      type="submit"
                      onClick={this.addNewService}
                      aria-label="Add service"
                    >
                      Add
                    </button>
                    <button
                      className="form-btn"
                      type="button"
                      onClick={() => this.props.dispatch(editProfileServicesEnd())}
                      aria-label="Cancel form"
                    >
                      Cancel
                    </button>
                  </form>
                </div>
                :
                <div>
                  <button
                    type="button"
                    onClick={() => this.props.dispatch(editProfileServicesStart())}
                    className="my-profile-add-services-btn"
                    aria-label="Click to add a new service"
                    autoFocus
                  >
                    Add a service ...
                  </button>
                </div>
              }
            </section>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  // const currentUser = state.main_dashboard.data[2];
  return {
    editAccount: state.myProfile.editAccount,
    loading: state.myProfile.loading,
    profileError: state.myProfile.error,
    editServices: state.myProfileServices.editServices,
    servicesError: state.myProfileServices.error,
    user: state.auth.currentUser,
    userServices: state.services.data,
    filterServices: state.services.services,
    serviceVal: state.myProfileServices.serviceVal,
    priceVal: state.myProfileServices.priceVal,
    error: state.myProfileServices.error,
  }
};

export default RequiresLogin()(connect(mapStateToProps)(MyProfile));