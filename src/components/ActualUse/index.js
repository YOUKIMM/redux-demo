import React from "react";
import {
  createStore,
  // combineReducers,
  bindActionCreators
} from "redux";

import { Provider, connect } from "react-redux";
import { countReducer } from "./reducer";
import { minusOne, plusOne } from "./actions";
// import withTimer from "./../HighComponent";

const store = createStore(countReducer);

export class Counter extends React.Component {
  render() {
    const { time, count, plusOne, minusOne } = this.props;
    return (
      <div className="counter">
        <button onClick={minusOne}>-</button>
        <span style={{ display: "inline-block", margin: "0 10px" }}>
          {count}
        </span>
        <button onClick={plusOne}>+</button>
        {/* {time.toString()} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ plusOne, minusOne }, dispatch);
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default class ActualUse extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}
