import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuthToken } from '../actions/localStorage';
import { clearAuth } from '../actions/auth';

import "./SlidingMenu.css";

class SlidingMenu extends React.Component {

  componentWillUpdate(nextProps) {
    nextProps.visibility ? this.refs.close.focus() : this.refs.close.blur();
  }

  onSignOut = () => {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  };

  render() {
    let visibility = "hide";

    if (this.props.visibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        className={visibility}
      >
        <button
          className="close-menu-btn"
          onClick={this.props.handleClick}
          type="button"
          ref="close"
          tabIndex={this.props.visibility ? "0" : "-1"}
          aria-label="close"
        >
        </button>
        <Link tabIndex={this.props.visibility ? "0" : "-1"} to="/" title="Home - landing page">Home</Link>
        <Link tabIndex={this.props.visibility ? "0" : "-1"} to="/profiles" title="Browse - view freelancers">Browse</Link>
        <Link tabIndex={this.props.visibility ? "0" : "-1"} to="/" title="Home - how it works section">How it works</Link>
        {this.props.isSignedIn ? (
          <React.Fragment>
            <Link tabIndex={this.props.visibility ? "0" : "-1"} to="/signin" title="Sign out" onClick={this.onSignOut}>Sign Out</Link>
            <Link tabIndex={this.props.visibility ? "0" : "-1"} to="/profiles/myprofile" title="My Profile - personal dashboard">My Profile</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link tabIndex={this.props.visibility ? "0" : "-1"} to="/signup" title="Signup form">Sign Up</Link>
            <Link tabIndex={this.props.visibility ? "0" : "-1"} to="/signin" title="Signin form">Sign In</Link>
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