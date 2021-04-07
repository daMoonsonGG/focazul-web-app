import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import history from "./history";

import Layout from "./components/layout";
import About from "./components/content/about";
import Teatro from "./components/content/teatro";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={About} />
            {/* <Route path="/colabora" exact component={Colabora} /> */}
            <Route path="/teatro" exact component={Teatro} />
            {/* <Route path="/patrocinadores" exact component={Patrocinadores} /> */}
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
