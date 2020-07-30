import React, { Component } from "react";
import { Header } from "./menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Test } from "./addRecipe";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/addrecipe" component={Test} />
        </Switch>
      </Router>
    );
  }
}
