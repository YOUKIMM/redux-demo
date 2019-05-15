import React from "react";
// import logo from './logo.svg';
// import { render } from "react-dom";
import Hello from "./Hello";
import PureRedux from "./components/PureRedux";
import ReduxReact from "./components/ReduxReact";
import "./App.css";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

const routeMap = {
  // chat: ChatApp,
  // "comment-box": CommentBox,
  // "tab-selector": TabSelectorSample,
  // "stateful-tab-selector": StatefulTabSelectSample,
  // "snapshot-sample": SnapshotSample,
  // "dom-diff": DomDiff,
  // "adv-tab-selector": AdvancedTabSelectorSample,
  // "locale-sample": LocaleSample,
  // clock: Clock,
  // "pure-redux": PureRedux,
  // counter: Counter,
  // "async-action": AsyncAction,
  // "redux-middleware": ReduxMiddleware,
  // "org-actions": OrgActions,
  // "router-sample": RouterSample,
  // "router-params": RouterParams,
  // "nested-route": NestedRoute,
  // "form-submit": FormSubmit,
  // "form-submit-antd": FormSubmitAntd,
  // "dynamic-form": DynamicForm,
  // "list-page": ListSample,
  // "wizard-sample": WizardSample,
  // layout1: Layout1,
  // layout2: Layout2,
  // "layout-resize": LayoutResize,
  // "portal-sample": PortalSample,
  // "antd-dialog": AntdDialog,
  // "d3-sample": D3Sample,
  // "dnd-sample": DndSample,
  // "reselect-sample": ReselectSample,
  // suspense: Suspense,
  hello: Hello,
  "pure-redux": PureRedux,
  "react-redux": ReduxReact
};

class App extends React.PureComponent {
  handleLinkClick = key => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routeMap[currentPage] || Hello;
    // if (currentPage.match(/\/user\/\w+|\/list-page/)) {
    //   CurrentPage = ListSample;
    // }
    // if (currentPage.match(/\/wizard\/step\/\w+/)) {
    //   CurrentPage = WizardSample;
    // }
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

export default App;
