import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuthToken } from '../actions/localStorage';
import { clearAuth } from '../actions/auth';

import "./SlidingMenu.css";

class SlidingMenu extends React.Component {

  onSignOut = () => {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  };

  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
           onClick={this.props.handleClick}
           className={visibility}>
        <Link to="/">Home</Link>
        <Link to="/profiles">Browse</Link>
        <Link to="/">How it works</Link>
        {this.props.isSignedIn ? (
          <React.Fragment>
            <Link to="/signin" onClick={this.onSignOut}>Sign Out</Link>
            <Link to="/profiles/myprofile">My Profile</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.currentUser !== null
  }
};


export default connect(mapStateToProps)(SlidingMenu);