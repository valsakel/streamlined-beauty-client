import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';

import { fetchMainDashboardData } from '../../actions/mainDashboard';

import './MainBoard.css';

class MainBoard extends React.Component {
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    this.props.dispatch(fetchMainDashboardData());
  }

  render() {
    const cards = this.props.data.map((user, ind) =>
        <Card key={ind} {...user} />
    );
    console.log(this.props.data);
    return (
      <main className="main-dashboard">
        Hello Main board
        {cards}

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