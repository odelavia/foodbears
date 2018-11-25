import React, { Component } from 'react';
import { connect } from 'react-redux'
import categoryDetails from '../seedData/foodItemSeed';
import { setCategoryItems } from '../actions';
import FoodItem from '../components/common/FoodItem';

class FoodItemList extends Component {

  componentWillMount() {
    const { location, dispatch } = this.props;
    const categoryPick = location.state.category;

    const getItemsOfSame = (inputArray, callback) => inputArray.filter(callback)
    const hasSameCategory = (a) => ('category', a.category == categoryPick)

    const getCategoryItems = getItemsOfSame(categoryDetails.data, hasSameCategory)
    dispatch(setCategoryItems(getCategoryItems));
  }

  getFoodItems(list) {
    console.log(list)
    return (
      list.map((item, index) => (
        <FoodItem
          key={index}
          item={item}
          title={item.title}
          description={item.description}
        />
      ))
    )
  }

  render() {
    return (
      <div className="food-container">{this.getFoodItems(this.props.categoryItems)}</div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryItems: state.foodItems.categoryItems,
  };
};

export default connect(mapStateToProps)(FoodItemList);