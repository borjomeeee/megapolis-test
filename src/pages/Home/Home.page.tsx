import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="content">
      <div className="content__topline topline">
        <div className="topline__title">Список задач</div>

        <div className="topline__button"></div>
      </div>

      <div className="content__todo-list todo-list"></div>
    </div>
  );
};

export default HomePage;
