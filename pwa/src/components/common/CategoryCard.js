import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryCard extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(val) {
    return console.log("you clicked the ", val, " category.")
  }

  render() {
    const { category, item } = this.props;
    return (
      <Link className="category-card" to={{pathname:"/foodItems",state:{ category: category } }}>
        {category}
      </Link>
    );
  }

}

export default CategoryCard;