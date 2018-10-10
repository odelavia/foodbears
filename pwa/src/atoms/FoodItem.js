import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodItem extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(val) {
    return console.log("you clicked the ", val, " item.")
  }

  render() {
    const { title, item } = this.props;
    return (
      <div>
        {title}
      </div>
    );
  }

}

export default FoodItem;