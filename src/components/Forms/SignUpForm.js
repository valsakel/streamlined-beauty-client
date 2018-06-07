import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, focus, formValueSelector } from 'redux-form';
import HeaderBar from '../HeaderBar';
import Fields from './Fields';
import {isTrimmed, nonEmpty, required, validEmail, length, matches} from './validators';
import { registerUser } from '../../actions/registerUser';

import './forms.css';

const passwordLength = length({min: 8, max: 72});
// const matchesPassword = matches('password');

const locations = ['Pick a location', 'Kennesaw', 'Marietta', 'Acworth'];

class SignUpForm extends React.Component {
  onSubmit = (values) => {
    console.log(this.props);
    const {full_name, email, password, location, role, service_type = ''} = values;
    const user = {full_name, email, password, location, role, service_type};
    return this.props.dispatch(registerUser(user));
  };

  render() {
    // If user logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (this.props.isAuthenticated) {
      console.log(this.props.user.role);

      if (this.props.user.role === 'pro') {
        return <Redirect to="/profiles/myprofile"/>;
      }
      return <Redirect to="/profiles"/>
    }

    return (
      <React.Fragment>
        <HeaderBar />
        {this.props.error &&
        <div className="error-bar" aria-live="polite">{this.props.error}</div>
        }
        <div className="signin-form-wrapper">
          <div className="signin-form">
            <h2 className="signin-form-header">Account Sign Up</h2>
            <form
              // method="post"
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
              <Field
                name="full_name"
                label="Full name"
                type="text"
                component={Fields}
                validate={[required, nonEmpty, isTrimmed]}
                autocomplete="off"
              />
              <Field
                // hideNativeErrors
                // onInvalid={e => e.preventDefault()}
                name="email"
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
              <Field
                name="location"
                label="Location"
                element="select"
                component={Fields}
                validate={required}
              >
                {this.props.locations.map((location, ind) =>
                  <option key={ind} value={location}>{location}</option>)
                }
              </Field>
              <Field
                id="roleUserField"
                name="role"
                label="User"
                component={Fields}
                type="radio"
                value="user"
                validate={required}
              />
              <Field
                id="roleProField"
                name="role"
                label="Pro"
                component={Fields}
                type="radio"
                value="pro"
                validate={required}
              />
              {(this.props.roleValue === 'pro') &&
                <Field
                  name="service_type"
                  label="Service type"
                  element="select"
                  component={Fields}
                  validate={required}
                  autocomplete="off"
                >
                  {this.props.serviceTypes.map((service, ind) =>
                    <option key={ind} value={service}>{service}</option>)
                  }
                </Field>
              }
              <div className="form-field form-field-signup-btns">
                <button
                  className="form-btn"
                  type="submit"
                >
                  Sign Up
                </button>
                <button
                  className="form-btn"
                  type="button"
                  disabled={this.props.pristine || this.props.submitting}
                  onClick={this.props.reset}
                >
                  Clear Values
                </button>
              </div>

            </form>
            <p
              className="account-message"
            >
              Already have an account?
              <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function scroll () {
  return window.scrollTo( 0, 1000 );
}

SignUpForm = reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup', 'email'))
})(SignUpForm);

const selector = formValueSelector('signup');

// Pass values from radio buttons to props
// This will allow to conditionally add 'Select type' field to the form
SignUpForm = connect(
  state => {
    const roleValue = selector(state, 'role');
    return {
      roleValue,
      isAuthenticated: state.auth.currentUser !== null,
      user: state.auth.currentUser,
      locations: state.profiles.locations,
      serviceTypes: state.profiles.serviceTypes
    }
  }
)(SignUpForm);

export default SignUpForm;