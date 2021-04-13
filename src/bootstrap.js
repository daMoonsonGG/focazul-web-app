import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(
  compose(
    (window.devToolsExtension ? window.devToolsExtension() : (f) => f)(
      createStore
    )
  )
);

import "./style/main.scss";

import history from "./history";

import Layout from "./components/layout";
import About from "./components/content/about";
import Colabora from "./components/content/colabora";
import Teatro from "./components/content/teatro";
import Patrocinadores from "./components/content/patrocinadores";
import Identificate from "./components/content/identificate";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/colabora" exact component={Colabora} />
            <Route path="/teatro" exact component={Teatro} />
            <Route path="/patrocinadores" exact component={Patrocinadores} />
            <Route path="/identificate" exact component={Identificate} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
