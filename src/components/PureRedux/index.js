import React from "react";
import { createStore, combineReducers, bindActionCreators } from "redux";

function run() {
  /**
   * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
   * 描述了 action 如何把 state 转变成下一个 state。
   *
   * state 的形式取决于你，可以是基本类型、数组、对象、
   * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
   * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
   *
   * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
   * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
   */

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

  const todos = (state = {}) => state;

  // Create store
  // 创建 Redux store 来存放应用的状态。
  // API 是 { subscribe, dispatch, getState }。

  const store = createStore(
    combineReducers({
      todos,
      counter
    })
  );

  // Action creator
  function plusOne() {
    // action
    return { type: "PLUS_ONE" };
  }

  function minusOne() {
    return { type: "MINUS_ONE" };
  }

  function customCount(count) {
    return { type: "CUSTOM_COUNT", payload: { count } };
  }

  plusOne = bindActionCreators(plusOne, store.dispatch);

  store.subscribe(() => console.log(store.getState()));
  // store.dispatch(plusOne());
  // 改变内部 state 惟一方法是 dispatch 一个 action。
  // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行

  plusOne();
  store.dispatch(minusOne());
  store.dispatch(customCount(5));
}

export default () => (
  <div>
    <button onClick={run}>Run</button>
    <p>* 请打开控制台查看运行结果</p>
  </div>
);
