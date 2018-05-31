import React from 'react';
import { connect } from 'react-redux';

import ServiceList from './ServiceList';

import placeholder_person from '../../images/placeholder_person.jpg';

class UserDashboard extends React.Component {
  // componentDidMount() {
  //   console.log('User dashboard did mount');
  //   console.log(this.props);
  // }

  render() {
    console.log(this.data);
    return (
      <React.Fragment>
        <div>
          Hello User Dashboard
        </div>
        <h2>
          My account
        </h2>
        <section className="user-details">
          <article>
            <header className="card-header">
              <div className="card-user-img">
                <img src={placeholder_person} className="user-img" alt="placeholder clip art" />

              </div>
              <div className="card-user-info">
                <h4>Christina Blank</h4>
                <p>Kennesaw</p>

              </div>

            </header>

          </article>
        </section>
       <ServiceList/>


      </React.Fragment>

    )
  }
}

const mapStateToProps = state => {
  const currentUser = state.main_dashboard.data[2];
  return {

    data: state.main_dashboard.data
  }
};

export default connect(mapStateToProps)(UserDashboard);