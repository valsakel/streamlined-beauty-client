import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {reduxForm, Field, focus} from 'redux-form';
import HeaderBar from '../HeaderBar';

import './forms.css';
import {isTrimmed, length, required, validEmail} from "./validators";
import Fields from "./Fields";
import {login} from '../../actions/auth';
import {connect} from "react-redux";

const passwordLength = length({min: 8, max: 72});

class SignInForm extends React.Component {
  componentWillReceiveProps(nextProp) {
    if (nextProp.loginError) {
      document.getElementById('top').scrollIntoView();
    }
  }

  onSubmit = (values) => this.props.dispatch(login(values.emailAddress, values.password)) ;

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

    let error;
    if (this.props.loginError) {
      error = (
        <div className="error-bar" aria-live="polite" role="alert">{this.props.loginError}</div>
      );
    }

    // If user logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (this.props.isAuthenticated) {
      if (this.props.user.role === 'pro') {
        return <Redirect to="/profiles/myprofile" />;
      }
      return <Redirect to="/profiles"/>
    }

    return (
      <React.Fragment>
        {loader}
        <HeaderBar />
        {error}
        <main className="signin-form-wrapper">
          <div className="signin-form">
            <h1 className="signin-form-header">Account Sign In</h1>
            <form
            // method="post"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              // hideNativeErrors
              // onInvalid={e => e.preventDefault()}
              autoFocus={true}
              name="emailAddress"
              label="Email address"
              type="email"
              component={Fields}
              validate={[required, validEmail, isTrimmed]}
              autocomplete="off"
            />
            <Field
              name="password"
              label="Password"
              type="password"
              component={Fields}
              validate={[required, isTrimmed, passwordLength]}
              autocomplete="off"
            />
            <div className="form-field">
              <button
                className="form-btn"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
            <p
              className="account-message">
              New to SB?
              <Link to="/signup">Sign Up</Link>
            </p>
            <p className="account-message">
              Or sign in as
              <button
                type="button"
                className="demo-btn"
                onClick={() => this.props.dispatch(login("user_name@email.com", "password"))}>
                Demo
              </button>
              user
            </p>
            </div>
        </main>
      </React.Fragment>
    )
  }
}


SignInForm = reduxForm({
  form: 'signin',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signin', 'email'))
})(SignInForm);

SignInForm = connect(
  state => {
    return {
      isAuthenticated: state.auth.currentUser !== null,
      user: state.auth.currentUser,
      loading: state.auth.loading,
      loginError: state.auth.error
    }
  }
)(SignInForm);

export default SignInForm;


// export default reduxForm({
//   form: 'signin',
//   fields: ['email', 'password']
//   // onSubmitSuccess: (dispatch) => dispatch() ,
// })(SignInForm)