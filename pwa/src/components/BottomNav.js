import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BottomNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      bottom: -250,
    };

    this.openNav = this.openNav.bind(this);
  }

  openNav() {
    this.setState(currentState => {
      return {
        open: !currentState.open,
        bottom: currentState.bottom === -250 ? 0 : -250,
      }
    },
    () => console.log(`nav is ${this.state.open}`))
  }

  render() {
    return (
      <div className="dragnav-wrapper" style={{bottom: `${this.state.bottom}px`}}>
        <div className="dragnav-container">
          <button className="js-dragnav-toggle" onClick={this.openNav} draggable onDrag={this.openNav} type="button" aria-label="Toggle navigation">
            <span className="dragnav-toggle__icon" />
          </button>
        </div>
        <div className="outsideAlert">
          <ul className="l-dragnav-list">
            <NavLink className="dragnav-list__item-1" to="/" onClick={this.openNav}>Login</NavLink>
            <NavLink className="dragnav-list__item-1" to="/" onClick={this.openNav}>Categories</NavLink>
            <NavLink className="dragnav-list__item-2" to="/" onClick={this.openNav}>Cart</NavLink>
          </ul>
        </div>
      </div>
    );
  }
}

export default BottomNav;