import React from "react";

const LoadingBarComponent: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__container container">
        <div className="loading__loader">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="loading__title">Loading ...</div>
      </div>
    </div>
  );
};

export default LoadingBarComponent;
