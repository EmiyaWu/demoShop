// /src/App.js
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import ShopCar from './ShopCar';

class Router extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={App} />
        <Route path="/ShopCar" component={ShopCar} />
      </div>
    );
  }
}

export default Router;