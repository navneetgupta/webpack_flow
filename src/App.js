import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Users from "./containers/Users";
import AsyncComponent from "./hoc/AsyncComponent";

const AsyncPizza = AsyncComponent(() => {
  return import("./containers/Pizza");
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route to="/" component={Users} exact />
          <Route to="/pizza" component={AsyncPizza} />
        </div>
      </div>
    );
  }
}
