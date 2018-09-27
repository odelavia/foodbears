import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions';
import CategoryCard from '../atoms/CategoryCard';

class FoodCategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.categories,
    }
    this.getCategoryList = this.getCategoryList.bind(this);
  }

  async componentDidMount() {
    await this.props.dispatch(getCategories())
    this.setState({
      categories: this.props.categories
    })
  }

  getCategoryList(list) {
    return list.map((item, index) => <CategoryCard key={index} item={item} category={item.category} />)
  }

  render() {
    return (
      <div>
        {this.getCategoryList(this.state.categories)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.foodItems.categories,
  };
};

export default connect(mapStateToProps)(FoodCategoryList);