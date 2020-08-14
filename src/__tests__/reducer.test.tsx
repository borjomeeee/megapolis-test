import reducer from "../store/reducer";

describe("reducer tests", () => {
  it("test create task", () => {
    const initialState = {
      tasks: [],
      error: "",
      isLoading: true,
    };

    const action = {
      type: "CREATE_TASK_SUCCESS" as const,
      payload: { task: { id: 1, descr: "Описание 1" } },
    };

    const newState = reducer(initialState, action);

    expect(newState.tasks.length).toBe(1);
    expect(newState.tasks[0].descr).toBe("Описание 1");

    expect(newState.isLoading).toBe(false);
  });

  it("test edit task", () => {
    const initialState = {
      tasks: [{ id: 1, descr: "Описание 1" }],
      error: "",
      isLoading: false,
    };

    const action = {
      type: "EDIT_TASK_SUCCESS" as const,
      payload: { id: 1, descr: "Описание 2" },
    };

    const newState = reducer(initialState, action);

    expect(newState.tasks.length).toBe(1);
    expect(newState.tasks[0].descr).toBe("Описание 2");
  });

  it("test remove task", () => {
    const initialState = {
      tasks: [
        { id: 1, descr: "Описание 1" },
        { id: 2, descr: "Описание 2" },
      ],
      error: "",
      isLoading: false,
    };

    const action = {
      type: "REMOVE_TASK_SUCCESS" as const,
      payload: { id: 1 },
    };

    const newState = reducer(initialState, action);

    expect(newState.tasks.length).toBe(1);
  });
});
