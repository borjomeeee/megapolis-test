import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import * as Pages from "../pages";

import { IInitialState } from "../store";

import { downloadTasksAction } from "../store/actions";
import { connect, ConnectedProps } from "react-redux";

const AppNavigation: React.FC<ConnectedProps<typeof connector>> = ({
  isLoading,
  downloadTasksAction,
}) => {
  useEffect(() => {
    downloadTasksAction();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Pages.HomePage />
        </Route>

        <Route path="/items/:id" exact>
          <Pages.TodoItemPage />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: IInitialState) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = { downloadTasksAction };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AppNavigation);
