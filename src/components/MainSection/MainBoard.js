import React from 'react';
import {connect} from 'react-redux';
import List from './List';

import { fetchMainDashboardData } from '../../actions/mainDashboard';


class MainBoard extends React.Component {
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    // this.props.dispatch(fetchMainDashboardData());
  }

  render() {
    console.log(this.props.data);
    return (
      <main className="main-dashboard">
        Hello Main board
        <List/>

      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.main_dashboard.data
  }
};

export default connect(mapStateToProps)(MainBoard);