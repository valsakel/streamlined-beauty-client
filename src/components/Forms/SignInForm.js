import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import HeaderBar from '../HeaderBar';

import './forms.css';
import {isTrimmed, length, nonEmpty, required, validEmail} from "./validators";
import Fields from "./Fields";
import { login } from '../../actions/auth';
import {connect} from "react-redux";

const passwordLength = length({min: 10, max: 72});


class SignInForm extends React.Component {
  onSubmit = (values) => {
    console.log(`SignInForm's onSubmit ran`, values);
    return this.props.dispatch(login(values.emailAddress, values.password));
  };

  render() {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (this.props.isAuthenticated) {
      console.log(this.props.user.role);

      if (this.props.user.role === 'pro') {
        return <Redirect to="/profiles/myprofile" />;
      }
      return <Redirect to="/profiles"/>
    }
    return (
      <React.Fragment>
        <HeaderBar />
        <div className="signin-form">
          <form
            // method="post"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              // hideNativeErrors
              // onInvalid={e => e.preventDefault()}
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
            <button
              className="form-btn"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p
            className="account-message">
            New to SB?
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </React.Fragment>
    )
  }
}


SignInForm = reduxForm({
  form: 'signin'
})(SignInForm);

SignInForm = connect(
  state => {
    return {
      isAuthenticated: state.auth.currentUser !== null,
      user: state.auth.currentUser
    }
  }
)(SignInForm);

export default SignInForm;


// export default reduxForm({
//   form: 'signin',
//   fields: ['email', 'password']
//   // onSubmitSuccess: (dispatch) => dispatch() ,
// })(SignInForm)