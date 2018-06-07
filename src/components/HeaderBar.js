import React from 'react';
import { Link } from 'react-router-dom';
import SlidingMenu from './SlidingMenu'

import './HeaderBar.css'

class HeaderBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleClick(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="header-bar" role="banner">
          <div>
            <Link
              to="/"
              className="header-link"
            >
                Streamlined
              <span>Beauty</span>
            </Link>
          </div>
          <nav role="navigation">
            <button
              id="menuButton"
              type="button"
              onClick={this.handleClick}
              aria-expanded={this.state.visible}
              aria-label="MENU"
              aria-controls="overlay-menu"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </nav>
          <SlidingMenu
            handleClick={this.handleClick}
            visibility={this.state.visible}
          />
        </header>
      </React.Fragment>
    )
  }
}

export default HeaderBar;