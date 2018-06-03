import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { editProfileAccountEnd } from '../actions/myProfileActions';

import {isTrimmed, required, validEmail} from "./Forms/validators";
import Fields from "./Forms/Fields";

// import {isTrimmed, length, nonEmpty, required, validEmail} from "./validators";
// import {authUserCreator} from '../actions/authUser';

// const passwordLength = length({min: 10, max: 72});

const locations = ['Select a location', 'Kennesaw', 'Marietta', 'Acworth'];


class MyProfileAccountForm extends React.Component {
  onSubmit = (values) => {
    console.log(`MyProfilesAccountForm's onSubmit ran`);


  };

  render() {
    return (
      <div className="my-profile-account-form">
        <form
          // method="post"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="full_name"
            label="Full name"
            type="text"
            component="input"

            // autocomplete="off"
          />
          <Field
            name="service_type"
            label="Service type"
            type="text"
            component="input"

            // autocomplete="off"
          />
          <Field
            name="location"
            label="Location"
            element="select"
            component="select"
            validate={required}
          >
            {locations.map((location, ind) =>
              <option key={ind} value={location}>{location}</option>
            )}
          </Field>
          <Field
            // hideNativeErrors
            // onInvalid={e => e.preventDefault()}
            name="email"
            label="Email address"
            type="email"
            component="input"
            // validate={[required, validEmail, isTrimmed]}
            // autoomplete="off"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => this.props.dispatch(editProfileAccountEnd())}>
            Cancel
          </button>

        </form>


      </div>
    )
  }
}

export default reduxForm({
  form: 'myprofile-account'
})(MyProfileAccountForm)