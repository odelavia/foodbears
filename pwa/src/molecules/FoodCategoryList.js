import React, { Component } from 'react';
import CategoryCard from '../atoms/CategoryCard';
import categories from '../seedData/foodItemSeed';

class FoodCategoryList extends Component {
  constructor(props) {
    super(props);

    this.getCategoryList = this.getCategoryList.bind(this);
  }

  getCategoryList(list) {
    console.log(list.data[0].category);
    return list.data.map((item, index) => <CategoryCard key={index} item={item} category={item.category} />)
  }

  render() {
    return (
      <div>
        {this.getCategoryList(categories)}
      </div>
    );
  }
}

export default FoodCategoryList;