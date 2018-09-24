import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import Navbar from '../components/common/Navbar';
import Home from '../components/Home';
// import Four04 from '../components/Four04';
// import Footer from '../components/common/Footer'

const AppRoutes = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </HashRouter>
);

export default AppRoutes;