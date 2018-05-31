import React from 'react';
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
        <SlidingMenu handleClick={this.handleClick}
                     menuVisibility={this.state.visible}/>
        <header className="header-bar">
          <div>
            <h3>
              StreamlinedBeauty
            </h3>
          </div>
          <nav>
            <button
              id="menuButton"
              onClick={this.handleClick}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </nav>
        </header>
      </React.Fragment>
    )
  }

};

export default HeaderBar;