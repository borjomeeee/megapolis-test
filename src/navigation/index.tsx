import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import * as Pages from "../pages";

const AppNavigation: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Pages.HomePage />
        </Route>

        <Route path="/note/:id" exact>
          <Pages.TodoItemPage />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppNavigation;
