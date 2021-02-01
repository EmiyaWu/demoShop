import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ShopCar from './shopCar/ShopCar';

class Router extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/ShopCar" component={ShopCar} />
      </div>
    );
  }
}

export default Router;