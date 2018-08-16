import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
  function RequiresLogin(props) {
    const {authenticating, signedIn, error, ...passThroughProps} = props;
    if (authenticating) {
      return (
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    } else if (!signedIn || error) {
      return <Redirect to="/signin" />;
    }
    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = (state, props) => ({
    authenticating: state.auth.loading,
    signedIn: state.auth.currentUser !== null,
    error: state.auth.error
  });

  return connect(mapStateToProps)(RequiresLogin);
};
