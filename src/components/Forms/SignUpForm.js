import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import Fields from './Fields';
import {isTrimmed, nonEmpty, required, validEmail, length, matches} from './validators';

import './forms.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');



const locations = ['Select location', 'Kennesaw', 'Marietta', 'Acworth'];


class SignUpForm extends React.Component {
  onSubmit = (values) => {
    if(!values.role) {
      console.log('no role');
      return (
        <div>HELLO</div>
      )
    }
    console.log(this.props);
    console.log(values);
  };

  render() {
    console.log(this.props);
    return (
    <div className="signin-form">
      <form
        method="post"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="fullName"
          label="Full name"
          type="text"
          component={Fields}
          validate={[required, nonEmpty, isTrimmed]}
          autocomplete="off"
        />
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
        <Field
          name="locations"
          label="Locations"
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
        {/*<div>*/}
          {/*<label>Sex</label>*/}
          {/*<div>*/}
            {/*<label>*/}
              {/*<Field name="sex" component="input" type="radio" value="male" />*/}
              {/*{' '}*/}
              {/*Male*/}
            {/*</label>*/}
            {/*<label>*/}
              {/*<Field name="sex" component="input" type="radio" value="female" />*/}
              {/*{' '}*/}
              {/*Female*/}
            {/*</label>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<Field*/}
          {/*id="roleUserField"*/}
          {/*name="roleUser"*/}
          {/*label="User"*/}
          {/*type="radio"*/}
          {/*component={Fields}*/}
          {/*value="user"*/}
          {/*isToggle={false}*/}
        {/*/>*/}
        {/*<Field*/}
          {/*id="roleProField"*/}
          {/*name="rolePro"*/}
          {/*label="Pro"*/}
          {/*type="radio"*/}
          {/*component={Fields}*/}
          {/*isToggle={true}*/}
          {/*value="pro"*/}
          {/*// validate={required}*/}
        {/*/>*/}
        <button
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="account-message">Already have an account?<a href="#">Sign In</a></p>
    </div>
    )
  }
}

export default reduxForm({
  form: 'signup'
})(SignUpForm);