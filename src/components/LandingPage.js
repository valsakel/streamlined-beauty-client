import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import HeaderBar from './HeaderBar';

import './LandingPage.css';

const LandingPage = (props) => {
  if (props.signedIn) {
    return <Redirect to="/profiles"/>
  }

  return (
    <React.Fragment>
      <div className="container">
        <HeaderBar />

      </div>
    </React.Fragment>
  )
};

const mapStateToProps = state => ({
  signedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);