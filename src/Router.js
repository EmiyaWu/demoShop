// /src/App.js
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import ShopCar from './ShopCar';

class Router extends Component {
  render() {
    return (
      <div>
        {/* The corresponding component will show here if the current URL matches the path */}
        <Route path="/" exact component={App} />
        <Route path="/ShopCar" component={ShopCar} />
      </div>
    );
  }
}

export default Router;