import { initialState, IInitialState } from ".";

import { IAction } from "./actionsTypes";

export default (
  state: IInitialState = initialState,
  action: IAction
): IInitialState => {
  switch (action.type) {
    default:
      return state;
  }
};
