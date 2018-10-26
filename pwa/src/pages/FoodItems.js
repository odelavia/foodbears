import React, { Component } from 'react';
import categoryDetails from '../seedData/foodItemSeed';
import FoodItem from '../components/common/FoodItem';

class FoodItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryItems: '',
    }
  }

  componentWillMount() {
    const categoryPick = this.props.location.state.category;

    const getItemsOfSame = (inputArray, callback) => inputArray.filter(callback)
    const hasSameCategory = (a) => ('category', a.category == categoryPick)

    const getCategoryItems = getItemsOfSame(categoryDetails.data, hasSameCategory)

    this.setState({ categoryItems: getCategoryItems})
  }

  getFoodItems(list) {
    console.log(list)
    return list.map((item, index) => <FoodItem key={index} item={item} title={item.title} description={item.description} />)
  }

  render() {
    return (
      <div className="food-container">{this.getFoodItems(this.state.categoryItems)}</div>
    );
  }
}

export default FoodItemList;