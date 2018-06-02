import React from 'react';
import { connect } from 'react-redux';

import HeaderBar from './HeaderBar';
import MyProfileAccountForm from './MyProfileAccountForm';

import { editAccountStart } from '../actions/myProfileActions';


import placeholder_person from '../images/placeholder_person.jpg';

class MyProfile extends React.Component {
  componentDidMount() {
    console.log('MyProfile did mount');
    console.log(this.props);
  }

  onEditAccount = e => {
    // e.preventDefault;
    console.log('onEditSubmit ran');
  };

  render() {
    console.log(this.data);
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
                <button type="button" onClick={() => this.props.dispatch(editAccountStart())}>Edit</button>
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
    editAccount: state.my_profile.editAccount

    // data: state.main_dashboard.data
  }
};

export default connect(mapStateToProps)(MyProfile);