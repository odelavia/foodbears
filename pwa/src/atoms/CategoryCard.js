import React, { Component } from 'react';

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
      <div onClick={() => this.onClick(category)}>
        {category}
      </div>
    );
  }

}

export default CategoryCard;