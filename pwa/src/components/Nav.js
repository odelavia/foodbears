import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      left: -600,
    };

    this.openNav = this.openNav.bind(this);
  }

  openNav() {
    this.setState(currentState => {
      return {
        open: !currentState.open,
        left: currentState.left === -600 ? -300 : -600,
      }
    },
    () => console.log(`nav is ${this.state.open}`))
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-container"  style={{margin: `5px 10px 5px ${this.state.open ? '175px' : '10px'}`}}>
          <button className="js-nav-toggle" onClick={this.openNav} type="button" aria-label="Toggle navigation">
            <span className="nav-toggle__icon" />
            <span className="nav-toggle__icon" />
            <span className="nav-toggle__icon" />
          </button>
        </div>
        <div className="outsideAlert">
          <ul className="l-nav-list" style={{left: this.state.left}}>
            <NavLink className="nav-list__item-1" to="/" onClick={this.openNav}>Login</NavLink>
            <NavLink className="nav-list__item-1" to="/" onClick={this.openNav}>Categories</NavLink>
            <NavLink className="nav-list__item-2" to="/" onClick={this.openNav}>Cart</NavLink>
            <NavLink className="nav-list__item-3" to="/" onClick={this.openNav}>Stats</NavLink>
            <NavLink className="nav-list__item-4" to="/" onClick={this.openNav}>Scan</NavLink>
            <NavLink className="nav-list__item-4" to="/" onClick={this.openNav}>Kitchen</NavLink>
            <NavLink className="nav-list__item-4" to="/" onClick={this.openNav}>Create Item</NavLink>
            <NavLink className="nav-list__item-4" to="/" onClick={this.openNav}>Update Item</NavLink>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;