import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import CommonButtonComponent from "../../components/Common/CommonButton.component";
import TodoListComponent from "../../components/Todo/TodoList.component";
import AddModalComponent from "../../components/Modal/AddModal.component";

import { createTaskAction } from "../../store/actions";

const HomePage: React.FC<ConnectedProps<typeof connector>> = ({
  createTaskAction,
}) => {
  const [visibleAddModal, setVisibleAddModal] = useState(false);

  const handleCreateTask = (descr: string) => {
    createTaskAction(descr);
    setVisibleAddModal(false);
  };

  return (
    <>
      {visibleAddModal && (
        <AddModalComponent
          onCreateTask={handleCreateTask}
          onCloseModal={setVisibleAddModal.bind(null, false)}
        />
      )}
      <div className="content">
        <div className="page home-page">
          <div className="container">
            <div className="home-page__topline topline">
              <div className="page__title topline__title">Список задач</div>

              <div className="topline__button">
                <CommonButtonComponent
                  color="green"
                  text="Добавить"
                  onClick={setVisibleAddModal.bind(null, true)}
                />
              </div>
            </div>

            <div className="home-page__todo-list">
              <TodoListComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = { createTaskAction };

const connector = connect(null, mapDispatchToProps);

export default connector(HomePage);
