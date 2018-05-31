import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import './forms.css';
import {isTrimmed, length, nonEmpty, required, validEmail} from "./validators";
import Fields from "./Fields";
import {authUserCreator} from '../../actions/authUser';

const passwordLength = length({min: 10, max: 72});


class SignInForm extends React.Component {
  onSubmit = (values) => {
    console.log(`SignInForm's onSubmit ran`);
    return this.props.dispatch(authUserCreator({
      email: 'foo@bar.com',
      password: 'aaaaaaaaaaa'
    }))

  };

  render() {
    return (
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
    )
  }
}

export default reduxForm({
  form: 'signin'
})(SignInForm)