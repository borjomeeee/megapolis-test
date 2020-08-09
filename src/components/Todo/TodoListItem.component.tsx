import React from "react";

import { ITodoItem } from "../../models/TodoItem.model";

interface ITodoListItemComponent extends ITodoItem {}

const TodoListItemComponent: React.FC<ITodoListItemComponent> = () => {
  return <></>;
};

export default TodoListItemComponent;
