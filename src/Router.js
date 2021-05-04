import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import ShopCar from './shopCar/ShopCar';

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Route path="/" exact component={Home} />
        <Route path="/ShopCar" component={ShopCar} />
      </BrowserRouter>
    );
  }
}

export default Router;