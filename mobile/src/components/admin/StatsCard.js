import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { OutlineButton, ProgressBarContainer } from '../common'
// import { connect } from 'react-redux';
// import { employeeUpdate, employeeCreate } from '../actions';
// onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}

class StatsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers : props.customerList,
      item: props.item,
      id : props.id,
      index : props.index,
      customer : props.customer,
      scanTime : props.scanTime,
      orderDate : props.orderDate,
      tableNo : props.tableNo,
      action : props.action,
      menuOne: props.menuOne,
      menuTwo: props.menuTwo,
      activeCardKey : this.props.index,
    }
  }
  // getMenuOneOrderstats() {
  //   const menuOne = this.props.menuOne
  //   menuOne.map(x => {
  //     let i = 0
  //     while(i > menuOne.length && menuOne[i].value !== 'N/A') {


  //     }
  //   })
  // }

  // getMenuTwoOrderstats() {

  // }

  handleActionButton() {
    let customers = this.state.customers
    let index = this.state.index
    let action = this.state.action
    if (action == 'Scan' ) {
      this.setState({ action: `Serve drinks` })
    } else if (action === `Serve drinks`) {
      this.setState({ action: `Serve firstCourse` })
    } else if (action === `Serve firstCourse`) {
      this.setState({ action: `Serve secondCourse` })
    } else if (action === `Serve secondCourse`) {
      this.setState({ action: `Close out` })
    } else if (action === `Close out`) {
      const deletingCard = this.state.activeCardKey
      this.setState({
        action: `Scan`,
        customers : this.state.customers.splice( index, 1), //deletes the card for the order that has been fully served
        activeCardKey : null
      })
      this.props.parentFlatlist.refreshFlatlist(deletingCard) //passes the index of the card to be deleted to parent component func
    }
  }

  render() {
    const { action } = this.state;
    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback onPress={Actions.statsItem}>
          <View>
            <View style={{paddingTop: 22, paddingHorizontal: '5%',}}>
              <Text style={styles.cardTitle}>{this.props.id}</Text>
              <Text>{this.props.customer}</Text>
              <Text>{this.props.scanTime}</Text>
              <View style={styles.menuOneStyle}>
                <Text>{this.props.menuOne.courseOne.optionOne}</Text>
                <Text>{this.props.menuOne.courseOne.optionTwo}</Text>
                <Text>{this.props.menuOne.courseOne.optionThree}</Text>
                <Text>{this.props.menuOne.courseTwo.optionOne}</Text>
                <Text>{this.props.menuOne.courseTwo.optionTwo}</Text>
                <Text>{this.props.menuOne.courseTwo.optionThree}</Text>
                <Text>{this.props.menuOne.courseThree.optionOne}</Text>
                <Text>{this.props.menuOne.courseThree.optionTwo}</Text>
                <Text>{this.props.menuOne.courseThree.optionThree}</Text>
                <Text>{this.props.menuOne.courseFour.optionOne}</Text>
                <Text>{this.props.menuOne.courseFour.optionTwo}</Text>
                <Text>{this.props.menuOne.courseFour.optionThree}</Text>
                <Text>{this.props.menuOne.courseFive.optionOne}</Text>
                <Text>{this.props.menuOne.courseFive.optionTwo}</Text>
                <Text>{this.props.menuOne.courseFive.optionThree}</Text>
              </View>
              <View style={styles.menuTwoStyle}>
                <Text>{this.props.menuTwo.courseOne.optionOne}</Text>
                <Text>{this.props.menuTwo.courseOne.optionTwo}</Text>
                <Text>{this.props.menuTwo.courseOne.optionThree}</Text>
                <Text>{this.props.menuTwo.courseTwo.optionOne}</Text>
                <Text>{this.props.menuTwo.courseTwo.optionTwo}</Text>
                <Text>{this.props.menuTwo.courseTwo.optionThree}</Text>
                <Text>{this.props.menuTwo.courseThree.optionOne}</Text>
                <Text>{this.props.menuTwo.courseThree.optionTwo}</Text>
                <Text>{this.props.menuTwo.courseThree.optionThree}</Text>
                <Text>{this.props.menuTwo.courseFour.optionOne}</Text>
                <Text>{this.props.menuTwo.courseFour.optionTwo}</Text>
                <Text>{this.props.menuTwo.courseFour.optionThree}</Text>
                <Text>{this.props.menuTwo.courseFive.optionOne}</Text>
                <Text>{this.props.menuTwo.courseFive.optionTwo}</Text>
                <Text>{this.props.menuTwo.courseFive.optionThree}</Text>
              </View>
              <Text>Order Date: {this.props.orderDate}</Text>
              <Text>Table #: {this.props.tableNo}</Text>

                <OutlineButton onPress={() => {this.handleActionButton() }}>
                  {this.state.action}
                </OutlineButton>

            </View>
            <ProgressBarContainer step={action} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    // alignSelf: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    // elevation: 2,
    minHeight: 100,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowOffset:{ width: 3,  height: 3, },
        shadowColor: '#000',
        shadowOpacity: .05,
      }
    })
  },
  cardTitle: {
    color: '#000',
  },
  menuOneStyle: {
    flexDirection: 'row',
  },
  menuTwoStyle: {
    flexDirection: 'row',
  },
});

export default(StatsCard);








// <Text style={styles.cardDescription}>
// {this.props.description}
// </Text>


// <View style={styles.menuOneStyle}>
//   <Text>{this.props.menuOne.courseOne.optionOne}</Text>
//   <Text>{this.props.menuOne.courseOne.optionTwo}</Text>
//   <Text>{this.props.menuOne.courseOne.optionThree}</Text>
//   <Text>{this.props.menuOne.courseTwo.optionOne}</Text>
//   <Text>{this.props.menuOne.courseTwo.optionTwo}</Text>
//   <Text>{this.props.menuOne.courseTwo.optionThree}</Text>
//   <Text>{this.props.menuOne.courseThree.optionOne}</Text>
//   <Text>{this.props.menuOne.courseThree.optionTwo}</Text>
//   <Text>{this.props.menuOne.courseThree.optionThree}</Text>
//   <Text>{this.props.menuOne.courseFour.optionOne}</Text>
//   <Text>{this.props.menuOne.courseFour.optionTwo}</Text>
//   <Text>{this.props.menuOne.courseFour.optionThree}</Text>
//   <Text>{this.props.menuOne.courseFive.optionOne}</Text>
//   <Text>{this.props.menuOne.courseFive.optionTwo}</Text>
//   <Text>{this.props.menuOne.courseFive.optionThree}</Text>
//   </View>
//   <View style={styles.menuTwoStyle}>
//   <Text>{this.props.menuTwo.courseOne.optionOne}</Text>
//   <Text>{this.props.menuTwo.courseOne.optionTwo}</Text>
//   <Text>{this.props.menuTwo.courseOne.optionThree}</Text>
//   <Text>{this.props.menuTwo.courseTwo.optionOne}</Text>
//   <Text>{this.props.menuTwo.courseTwo.optionTwo}</Text>
//   <Text>{this.props.menuTwo.courseTwo.optionThree}</Text>
//   <Text>{this.props.menuTwo.courseThree.optionOne}</Text>
//   <Text>{this.props.menuTwo.courseThree.optionTwo}</Text>
//   <Text>{this.props.menuTwo.courseThree.optionThree}</Text>
//   <Text>{this.props.menuTwo.courseFour.optionOne}</Text>
//   <Text>{this.props.menuTwo.courseFour.optionTwo}</Text>
//   <Text>{this.props.menuTwo.courseFour.optionThree}</Text>
//   <Text>{this.props.menuTwo.courseFive.optionOne}</Text>
//   <Text>{this.props.menuTwo.courseFive.optionTwo}</Text>
//   <Text>{this.props.menuTwo.courseFive.optionThree}</Text>
// </View>


// menuOneCourseOneOptionOne : props.menuOneCourseOneOptionOne,
// menuOneCourseOneOptionTwo : props.menuOneCourseOneOptionTwo,
// menuOneCourseOneOptionThree : props.menuOneCourseOneOptionThree,
// menuOneCourseTwoOptionOne : props.menuOneCourseTwoOptionOne,
// menuOneCourseTwoOptionTwo : props.menuOneCourseTwoOptionTwo,
// menuOneCourseTwoOptionThree : props.menuOneCourseTwoOptionThree,
// menuOneCourseThreeOptionOne : props.menuOneCourseThreeOptionOne,
// menuOneCourseThreeOptionTwo : props.menuOneCourseThreeOptionTwo,
// menuOneCourseThreeOptionThree : props.menuOneCourseThreeOptionThree,
// menuOneCourseFourOptionOne : props.menuOneCourseFourOptionOne,
// menuOneCourseFourOptionTwo : props.menuOneCourseFourOptionTwo,
// menuOneCourseFourOptionThree : props.menuOneCourseFourOptionThree,
// menuOneCourseFiveOptionOne : props.menuOneCourseFiveOptionOne,
// menuOneCourseFiveOptionTwo : props.menuOneCourseFiveOptionTwo,
// menuOneCourseFiveOptionThree : props.menuOneCourseFiveOptionThree,
// menuTwoCourseOneOptionOne : props.menuTwoCourseOneOptionOne,
// menuTwoCourseOneOptionTwo : props.menuTwoCourseOneOptionTwo,
// menuTwoCourseOneOptionThree : props.menuTwoCourseOneOptionThree,
// menuTwoCourseTwoOptionOne : props.menuTwoCourseTwoOptionOne,
// menuTwoCourseTwoOptionTwo : props.menuTwoCourseTwoOptionTwo,
// menuTwoCourseTwoOptionThree : props.menuTwoCourseTwoOptionThree,
// menuTwoCourseThreeOptionOne : props.menuTwoCourseThreeOptionOne,
// menuTwoCourseThreeOptionTwo : props.menuTwoCourseThreeOptionTwo,
// menuTwoCourseThreeOptionThree : props.menuTwoCourseThreeOptionThree,
// menuTwoCourseFourOptionOne : props.menuTwoCourseFourOptionOne,
// menuTwoCourseFourOptionTwo : props.menuTwoCourseFourOptionTwo,
// menuTwoCourseFourOptionThree : props.menuTwoCourseFourOptionThree,
// menuTwoCourseFiveOptionOne : props.menuTwoCourseFiveOptionOne,
// menuTwoCourseFiveOptionTwo : props.menuTwoCourseFiveOptionTwo,
// menuTwoCourseFiveOptionThree : props.menuTwoCourseFiveOptionThree,


// <View style={styles.menuOneStyle}>
//   <Text>{this.props.menuOneCourseOneOptionOne}</Text>
//   <Text>{this.props.menuOneCourseOneOptionTwo}</Text>
//   <Text>{this.props.menuOneCourseOneOptionThree}</Text>
//   <Text>{this.props.menuOneCourseTwoOptionOne}</Text>
//   <Text>{this.props.menuOneCourseTwoOptionTwo}</Text>
//   <Text>{this.props.menuOneCourseTwoOptionThree}</Text>
//   <Text>{this.props.menuOneCourseThreeOptionOne}</Text>
//   <Text>{this.props.menuOneCourseThreeOptionTwo}</Text>
//   <Text>{this.props.menuOneCourseThreeOptionThree}</Text>
//   <Text>{this.props.menuOneCourseFourOptionOne}</Text>
//   <Text>{this.props.menuOneCourseFourOptionTwo}</Text>
//   <Text>{this.props.menuOneCourseFourOptionThree}</Text>
//   <Text>{this.props.menuOneCourseFiveOptionOne}</Text>
//   <Text>{this.props.menuOneCourseFiveOptionTwo}</Text>
//   <Text>{this.props.menuOneCourseFiveOptionThree}</Text>
//   </View>
//   <View style={styles.menuTwoStyle}>
//   <Text>{this.props.menuTwoCourseOneOptionOne}</Text>
//   <Text>{this.props.menuTwoCourseOneOptionTwo}</Text>
//   <Text>{this.props.menuTwoCourseOneOptionThree}</Text>
//   <Text>{this.props.menuTwoCourseTwoOptionOne}</Text>
//   <Text>{this.props.menuTwoCourseTwoOptionTwo}</Text>
//   <Text>{this.props.menuTwoCourseTwoOptionThree}</Text>
//   <Text>{this.props.menuTwoCourseThreeOptionOne}</Text>
//   <Text>{this.props.menuTwoCourseThreeOptionTwo}</Text>
//   <Text>{this.props.menuTwoCourseThreeOptionThree}</Text>
//   <Text>{this.props.menuTwoCourseFourOptionOne}</Text>
//   <Text>{this.props.menuTwoCourseFourOptionTwo}</Text>
//   <Text>{this.props.menuTwoCourseFourOptionThree}</Text>
//   <Text>{this.props.menuTwoCourseFiveOptionOne}</Text>
//   <Text>{this.props.menuTwoCourseFiveOptionTwo}</Text>
//   <Text>{this.props.menuTwoCourseFiveOptionThree}</Text>
// </View>