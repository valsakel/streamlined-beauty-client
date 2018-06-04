import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, focus, formValueSelector } from 'redux-form';
import HeaderBar from '../HeaderBar';
import Fields from './Fields';
import {isTrimmed, nonEmpty, required, validEmail, length, matches} from './validators';
import { registerUser } from '../../actions/registerUser';

import './forms.css';

const passwordLength = length({min: 8, max: 72});
// const matchesPassword = matches('password');

const locations = ['Select a location', 'Kennesaw', 'Marietta', 'Acworth'];

class SignUpForm extends React.Component {
  onSubmit = (values) => {
    console.log(values);
    const {full_name, email, password, location, role, service_type = ''} = values;
    const user = {full_name, email, password, location, role, service_type};

    return this.props.dispatch(

      registerUser(user)
    );
  };

  render() {
    // const userProRole = this.props;
    console.log(this.props.roleValue);
    return (
      <React.Fragment>
        <HeaderBar />
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
                {/*<option>Select location</option>*/}
                {locations.map((location, ind) =>
                  <option key={ind} value={location}>{location}</option>
                )}
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
                type="text"
                component={Fields}
                // validate={[required, nonEmpty, isTrimmed]}
                autocomplete="off"
              />
              }
              <button
                className="form-btn"
                type="submit"
              >
                Sign Up
              </button>
              <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Clear Values</button>
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




SignUpForm = reduxForm({
  form: 'signup'
})(SignUpForm);

const selector = formValueSelector('signup');

// Pass values from radio buttons to props
// This will allow to conditionally add 'Select type' field to the form
SignUpForm = connect(
  state => {
    const roleValue = selector(state, 'role');
    return {
      roleValue
    }
  }
)(SignUpForm);

export default SignUpForm;

// export default reduxForm({
//   form: 'signup'
// })(SignUpForm);