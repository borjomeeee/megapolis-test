import React, { useCallback } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";

import TodoListItemComponent from "./TodoListItem.component";

import { IInitialState } from "../../store/reducer";

import { ITodoItem } from "../../models/TodoItem.model";

import { removeTaskAction } from "../../store/actions";

const TodoListComponent: React.FC<ConnectedProps<typeof connector>> = ({
  tasks,

  removeTaskAction,
}) => {
  const history = useHistory();

  const editTaskHandler = useCallback(
    (id: number) => {
      history.push(`/items/${id}`);
    },
    [history]
  );

  if (tasks.length === 0) {
    return <div>Пустой лист тасков!</div>;
  }

  return (
    <table className="todo-list">
      <tbody>
        {tasks.map((item: ITodoItem) => (
          <TodoListItemComponent
            key={item.id}
            className="todo-list__row"
            item={item}
            onEdit={editTaskHandler}
            onRemove={removeTaskAction}
          />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: IInitialState) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = { removeTaskAction };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TodoListComponent);
