import React from 'react';
import { reduxForm, Field } from 'redux-form';

import ServiceForm from "./ServiceForm";


import './ServiceList.css';
import {required} from "../Forms/validators";
import Fields from "../Forms/Fields";

class ServiceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }

  }

  setEditing(editing) {
    this.setState({
      editing
    })
  }

  render() {
    if (this.state.editing) {
      return (
        <React.Fragment>
          <header>
            <h2>
              My services
            </h2>
          </header>
          <ServiceForm />
        </React.Fragment>
      )
    }
    const serviceList = ['Manicure', 'Pedicure', 'Gel manicure'];

    const services = serviceList.map((service, ind) => (
      <p key={ind}>{service}</p>
    ));

    return (
      <div className="service-details">
        <header>
          <h2>
            My services
          </h2>
        </header>
        <section>
          {services}
        </section>
        <button type="button" onClick={() => this.setEditing(true)}>Edit</button>

      </div>

    )
  }
};

export default ServiceList;