import React from 'react';
import Card from './Card';
import {connect} from "react-redux";

class List extends React.Component {
  render() {
    console.log(this.props.data);

    const cards = this.props.data.map((card, ind) =>
      <li key={ind}>
        <Card {...card} />
      </li>
    );
    return (
      <React.Fragment>
        <ul>
          {cards}
        </ul>
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {
    data: state.main_dashboard.data
  }
};


export default connect(mapStateToProps)(List);