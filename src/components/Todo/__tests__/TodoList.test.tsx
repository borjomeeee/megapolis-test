import React from "react";
import { Store, createStore } from "redux";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { shallow, mount } from "enzyme";

import renderer from "react-test-renderer";

import reducer, { IInitialState } from "../../../store/reducer";

import TodoListComponent from "../TodoList.component";

import { IAction } from "../../../store/actionsTypes";

describe("todo list tests", () => {
  it("render correctly", () => {
    const initialState: IInitialState = {
      tasks: [
        { id: 1, descr: "Descr 1" },
        { id: 2, descr: "Descr 2" },
        { id: 3, descr: "Descr 3" },
      ],
      error: "",
      isLoading: false,
    };

    const mockStore = configureStore();
    let store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <TodoListComponent />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("test reducer actions", () => {
    const store = createStore(reducer);

    store.dispatch({
      type: "DOWNLOAD_TASKS_SUCCESS",
      payload: {
        tasks: [
          { id: 1, descr: "Descr 1" },
          { id: 2, descr: "Descr 2" },
          { id: 3, descr: "Descr 3" },
        ],
      },
    });

    it("correct add task", () => {
      let wrapper = mount(
        <Provider store={store}>
          <TodoListComponent />
        </Provider>
      );

      expect(wrapper.find("TodoListItemComponent")).toHaveLength(3);

      store.dispatch({
        type: "CREATE_TASK_SUCCESS",
        payload: { task: { id: 4, descr: "Descr 4" } },
      });

      wrapper = mount(
        <Provider store={store}>
          <TodoListComponent />
        </Provider>
      );

      expect(wrapper.find("TodoListItemComponent")).toHaveLength(4);
    });

    it("correct remove task", () => {
      let wrapper = mount(
        <Provider store={store}>
          <TodoListComponent />
        </Provider>
      );

      expect(wrapper.find("TodoListItemComponent")).toHaveLength(4);

      store.dispatch({
        type: "REMOVE_TASK_SUCCESS",
        payload: { id: 3 },
      });

      wrapper = mount(
        <Provider store={store}>
          <TodoListComponent />
        </Provider>
      );

      expect(wrapper.find("TodoListItemComponent")).toHaveLength(3);
    });
  });

  it("test empty tasks list", () => {
    const store = createStore(reducer);

    let wrapper = mount(
      <Provider store={store}>
        <TodoListComponent />
      </Provider>
    );

    expect(wrapper.find("TodoListItemComponent")).toHaveLength(0);
    expect(wrapper.find("div").text()).toBe("Пустой лист тасков!");
  });
});
