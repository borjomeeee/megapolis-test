import React, { useCallback } from "react";

import { ITodoItem } from "../../models/TodoItem.model";

import { ReactComponent as EditIcon } from "../../static/icons/edit.svg";
import { ReactComponent as RemoveIcon } from "../../static/icons/remove.svg";

interface ITodoListItemComponent extends React.ComponentProps<"tr"> {
  item: ITodoItem;

  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoListItemComponent: React.FC<ITodoListItemComponent> = ({
  item,

  onEdit,
  onRemove,

  ...props
}) => {
  const { id, descr } = item;

  return (
    <tr {...props} className={`todo-item ${props.className}`}>
      <td className="todo-item__col">{`Задача №${item.id}`}</td>

      <td width="70%" className="todo-item__col">
        {descr}
      </td>

      <td width="100px" className="todo-item__col">
        <div className="todo-item__change-container">
          <div className="todo-item__icon todo-item__icon_edit">
            <EditIcon onClick={onEdit.bind(null, id)} />
          </div>
          <div className="todo-item__icon todo-item__icon_remove">
            <RemoveIcon onClick={onRemove.bind(null, id)} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TodoListItemComponent;
