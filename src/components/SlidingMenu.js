import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuthToken } from '../actions/localStorage';
import { clearAuth } from '../actions/auth';

import "./SlidingMenu.css";

class SlidingMenu extends React.Component {

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
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
          tabindex={this.props.visibility ? "0" : "-1"}
          aria-label="close"
        >
        </button>
        <Link tabindex={this.props.visibility ? "0" : "-1"} to="/">Home</Link>
        <Link tabindex={this.props.visibility ? "0" : "-1"} to="/profiles">Browse</Link>
        <Link tabindex={this.props.visibility ? "0" : "-1"} to="/">How it works</Link>
        {this.props.isSignedIn ? (
          <React.Fragment>
            <Link tabindex={this.props.visibility ? "0" : "-1"} to="/signin" onClick={this.onSignOut}>Sign Out</Link>
            <Link tabindex={this.props.visibility ? "0" : "-1"} to="/profiles/myprofile">My Profile</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link tabindex={this.props.visibility ? "0" : "-1"} to="/signup">Sign Up</Link>
            <Link tabindex={this.props.visibility ? "0" : "-1"} to="/signin">Sign In</Link>
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