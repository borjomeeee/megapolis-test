import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import * as Pages from "../pages";

import { IInitialState } from "../store";

import { downloadTasksAction } from "../store/actions";

import LoadingBarComponent from "../components/Common/LoadingBar.component";

const AppNavigation: React.FC<ConnectedProps<typeof connector>> = ({
  isLoading,
  downloadTasksAction,
}) => {
  useEffect(() => {
    downloadTasksAction();
  }, [downloadTasksAction]);

  return (
    <Router>
      {isLoading && <LoadingBarComponent />}
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
