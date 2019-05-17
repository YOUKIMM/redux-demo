import React from "react";
import {
  createStore,
  // combineReducers,
  bindActionCreators
} from "redux";

import { Provider, connect } from "react-redux";

// Store initial state
const initialState = { count: 0 };

// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return { count: state.count + 1 };
    case "MINUS_ONE":
      return { count: state.count - 1 };
    case "CUSTOM_COUNT":
      return {
        count: state.count + action.payload.count
      };
    default:
      break;
  }
  return state;
};

// Create store
const store = createStore(counter);

// Action creator
function plusOne() {
  // action
  return { type: "PLUS_ONE" };
}

function minusOne() {
  return { type: "MINUS_ONE" };
}

export class Counter extends React.Component {
  render() {
    const { count, plusOne, minusOne } = this.props;
    return (
      <div className="counter">
        <button onClick={minusOne}>-</button>
        <span style={{ display: "inline-block", margin: "0 10px" }}>
          {count}
        </span>
        <button onClick={plusOne}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// 把一个 value 为不同 action creator 的对象，转成拥有同名 key 的对象。
// 同时使用 dispatch 对每个 action creator 进行包装，以便可以直接调用它们
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ plusOne, minusOne }, dispatch);
}

// 连接 React 组件与 Redux store。

// 只要定义了mapStateToProps，组件将会监听 Redux store 的变化。任何时候，
// 只要 Redux store 发生改变，mapStateToProps 函数就会被调用
// 该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。如果你省略了这个参数，
// 你的组件将不会监听 Redux store。

// mapDispatchToProps如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，
// 对象所定义的方法名将作为属性名；每个方法将返回一个新的函数，函数中dispatch方法会将
// action creator 的返回值作为参数执行。这些属性会被合并到组件的 props 中。
const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default class CounterSample extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}
