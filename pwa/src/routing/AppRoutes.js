import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SideNav from '../components/SideNav';
import FoodItems from '../pages/FoodItems';
import FoodCategories from '../pages/FoodCategories';
import BottomNav from '../components/BottomNav';
// import Four04 from '../components/Four04';

const AppRoutes = () => (
  <HashRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={FoodCategories} />
        <Route path="/foodItems" component={FoodItems} />
      </Switch>
      <SideNav />
      <BottomNav />
    </Fragment>
  </HashRouter>
);

export default AppRoutes;