import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="content">
      <div className="home">
        <div className="home__topline topline">
          <div className="topline__title">Список задач</div>

          <div className="topline__button">
            <button>Добавить</button>
          </div>
        </div>

        <div className="home__todo-list todo-list">
          <div className="todo-list__todo-item todo-item">
            <div className="todo-item__title">Задача №1</div>

            <div className="todo-item__descr">Описание</div>

            <div className="todo-item__features-list features-list">
              <div className="features-list__features-item">
                <span>Изменить</span>
              </div>
              <div className="features-list__features-item">
                <span>Удалить</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
