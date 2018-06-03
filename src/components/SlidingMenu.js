import React from "react";
import { Link } from 'react-router-dom';
import "./SlidingMenu.css";

class SlidingMenu extends React.Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
           onClick={this.props.handleClick}
           className={visibility}>
        <Link to="/">Home</Link>
        <Link to="/profiles">Browse</Link>
        <Link to="/">How it works</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/profiles/myprofile">My Profile</Link>
      </div>
    );
  }
}

export default SlidingMenu;