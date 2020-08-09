import React from "react";

const TodoItemPage: React.FC = () => {
  return (
    <div className="content">
      <div className="todoitem-page">
        <div className="todoitem-page__title">Название задачи</div>

        <div className="todoitem-page__todo-input">
          <div className="todo-input__label">Краткое описание</div>

          <div className="todo-input__container">
            <input type="text" />
          </div>
        </div>

        <div className="todoitem-page__button-back">
          <button>Вернуться в список</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItemPage;
