import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Service from "./Service";

class ServiceForm extends React.Component {
  render() {
    const serviceList = ['Select a service', 'Manicure', 'Pedicure', 'Gel manicure'];
    const userServices = ['Manicure', 'Pedicure', 'Gel manicure'];
    const list = userServices.map((user_service, ind) => {
      return (
        <Field
          key={ind}
          name={`service-${ind + 1}`}
          // value={user_service}
          // label="service"
          element="select"
          component={Service}
        >
          {serviceList.map((service, ind) =>
            <option key={ind} value={service} selected={service === user_service}>{service}</option>
          )}
        </Field>
      )
    });

    if(serviceList.length === 1) {
      return (
        <div>
          <a href="#">Add a service ...</a>
        </div>
      );
    }

    return (
      <div className="service-details">
        <section>
          <form>
            {list}
          </form>
          <div>
            <a href="#">Add a service ...</a>
          </div>
        </section>
      </div>
    )

  }

}

export default reduxForm({
  form: 'services'
})(ServiceForm);

