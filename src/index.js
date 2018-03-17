import registerServiceWorker from "./registerServiceWorker";
import ReactDOM from "react-dom";
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import { Projects } from "./routes/Projects";

import "semantic-ui-css/semantic.min.css";
import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/projects" exact component={Projects} />
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
