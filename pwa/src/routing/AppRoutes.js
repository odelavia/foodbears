import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
// import Home from '../pages/Home';
import FoodItems from '../pages/FoodItems';
import FoodCategories from '../pages/FoodCategories';
// import Four04 from '../components/Four04';
// import Footer from '../components/common/Footer'

const AppRoutes = () => (
  <HashRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={FoodCategories} />
        <Route path="/foodItems" component={FoodItems} />
      </Switch>
    </div>
  </HashRouter>
);

export default AppRoutes;