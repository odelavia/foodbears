import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    }
    this.handleCardExpansion = this.handleCardExpansion.bind(this);
  }

  handleCardExpansion() {
    // return console.log("you clicked the ", val, " item.")
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { title, description, item } = this.props;
    const { expanded } = this.state;
    return (
      <div className="food-item">
        <div className="expandable-card" onClick={this.handleCardExpansion}>
          <div className="food-text">
            <div className="food-title">{title}</div>
            <div className="food-description" style={{ display: expanded ? 'block' : 'none' }}>{description}</div>
          </div>
          <div className="item-review">
            <div className="rating">rating</div>
            <div className="nutrition">15mg fat</div>
          </div>
          <div className="heart-container"></div>
        </div>
        <div className="plate-image">img</div>
        <div className="counter-pill"></div>
      </div>
    );
  }

}

export default FoodItem;