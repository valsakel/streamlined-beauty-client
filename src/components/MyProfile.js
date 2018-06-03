import React from 'react';
import { connect } from 'react-redux';

import RequiresLogin from './RequiresLogin';

import HeaderBar from './HeaderBar';
import MyProfileAccountForm from './MyProfileAccountForm';

import { editProfileAccountStart, fetchMyProfileDetails } from '../actions/myProfileActions';


import placeholder_person from '../images/placeholder_person.jpg';

class MyProfile extends React.Component {
  componentDidMount() {
    console.log('MyProfile did mount');
    console.log(this.props);
    this.props.dispatch(fetchMyProfileDetails())

  }
  onEditAccount = e => {
    // e.preventDefault;
    console.log('onEditSubmit ran');
  };

  render() {
    console.log(this.props.user);
    return (
      <React.Fragment>
        <HeaderBar />
        <h2>
          My Profile
        </h2>

        {this.props.editAccount
          ?
          <MyProfileAccountForm />
          :
          <section className="my-profile-account">
            <header>
              <h2>Account</h2>
            </header>
            <main className="card-header">
              <div className="card-user-img">
                <img src={placeholder_person} className="user-img" alt="placeholder clip art" />
              </div>
              <div className="card-user-info">
                <h4>Christina Blank</h4>
                <p>Kennesaw</p>
                <p>foo@bar.com</p>
              </div>
              <div>
                <button type="button" onClick={() => this.props.dispatch(editProfileAccountStart())}>Edit</button>
              </div>
            </main>


          </section>
        }



      </React.Fragment>

    )
  }
}

const mapStateToProps = state => {
  // const currentUser = state.main_dashboard.data[2];
  return {
    editAccount: state.myProfile.editAccount,
    user: state.auth.currentUser
    // email: state.auth.currentUser.email,


    // data: state.main_dashboard.data
  }
};

export default RequiresLogin()(connect(mapStateToProps)(MyProfile));