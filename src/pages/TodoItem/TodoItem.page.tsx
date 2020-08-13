import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

import { IInitialState } from "../../store";

import { ITodoItem } from "../../models/TodoItem.model";

import CommonButtonComponent from "../../components/Common/CommonButton.component";
import CommonInputComponent from "../../components/Common/CommonInput.component";

import { editTaskAction, removeTaskAction } from "../../store/actions";

type ICurrTask = null | ITodoItem;

const TodoItemPage: React.FC<ConnectedProps<typeof connector>> = ({
  tasks,
  isLoading,

  editTaskAction,
  removeTaskAction,
}) => {
  const { id } = useParams();
  const history = useHistory();

  const currTask: ICurrTask = tasks.reduce(
    (acc: ICurrTask, value: ITodoItem) =>
      acc ? acc : value.id === +id ? value : acc,
    null
  );

  const [inputValue, setInputValue] = useState(currTask?.descr || "");
  const [inputError, setInputError] = useState("");

  if (currTask === null) {
    history.push("/");
  }

  const handleGoBack = () => history.push("/");

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (inputError) {
      setInputError("");
    }

    setInputValue(event.target.value);
  };

  const handleSaveTask = () => {
    if (inputValue.length === 0) {
      setInputError("Заголовок не может быть пустым");
    } else {
      editTaskAction(currTask!.id, inputValue);
    }
  };

  const handleRemoveTask = () => {
    removeTaskAction(+id);
    history.push("/");
  };

  return (
    <div className="content">
      <div className="page todoitem-page">
        <div className="container">
          <div className="todoitem-page__topline">
            <div className="page__title todoitem-page__title">{`Задача №${
              currTask!.id
            }`}</div>

            <div className="todoitem-page__remove">
              <CommonButtonComponent
                color="green"
                text="Удалить"
                onClick={handleRemoveTask}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="todoitem-page__todo-input todo-input">
            <div className="todo-input__label">Краткое описание</div>

            <CommonInputComponent
              className="todo-input__input"
              type="text"
              value={inputValue}
              onChange={handleChangeInputValue}
            />

            <div className="todo-input__error">{inputError}</div>
          </div>

          <div className="todoitem-page__button">
            {inputValue === currTask!.descr ? (
              <CommonButtonComponent
                color="blue"
                text="Вернуться в список"
                onClick={handleGoBack}
                disabled={isLoading}
              />
            ) : (
              <CommonButtonComponent
                color="blue"
                text="Сохранить"
                onClick={handleSaveTask}
                disabled={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IInitialState) => ({
  tasks: state.tasks,
  isLoading: state.isLoading,
});

const mapDispatchToProps = { editTaskAction, removeTaskAction };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TodoItemPage);
