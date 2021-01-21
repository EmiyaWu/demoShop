import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {GridThemeProvider, BaseCSS} from 'styled-bootstrap-grid';
import bootstrapGridTheme from './gridTheme';
import { BrowserRouter, Switch } from 'react-router-dom';
import Router from './Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from "./store";

// const initialState = {
//   carData: [],
//   shopAmount: 0,
// };

// const initialCarData = [];

// function reducer(state = initialState, action) {
//   switch(action.type) {
//     case "GETDATA":
//       const identicalProduct = initialCarData.indexOf(action.data);
//       if (identicalProduct !== -1) {
//         alert("已經重複囉!")
//       } else {
//         initialCarData.push(action.data);
//         return {
//           carData: initialCarData,
//           shopAmount: initialCarData.length,
//         };
//       };
      
//       default:
//         return state;
//   };
  
// }

// const store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <GridThemeProvider
          gridTheme={bootstrapGridTheme}
        >
          <Router />
          <BaseCSS />
        </GridThemeProvider>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);