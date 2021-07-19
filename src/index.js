import React, {Component} from "react";
import Content from "./containers/Content";
import Header from "./containers/Header";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import {Provider} from 'react-redux';

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'red'
    }
  }
  switch(action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      }
    default:
      return state;
  }
}

const store = createStore(themeReducer);
class Index extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Content></Content>        
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);