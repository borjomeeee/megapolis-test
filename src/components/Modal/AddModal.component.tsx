import React, { useRef, useState } from "react";

import { ReactComponent as CloseIcon } from "../../static/icons/close.svg";

import CommonButtonComponent from "../Common/CommonButton.component";
import CommonInputComponent from "../Common/CommonInput.component";

interface IAddModalComponent {
  onCreateTask: (descr: string) => void;
  onCloseModal: () => void;
}

const AddModalComponent: React.FC<IAddModalComponent> = ({
  onCreateTask,
  onCloseModal,
}) => {
  const [error, setError] = useState("");
  let inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddTask = () => {
    const value = inputRef.current?.value || "";

    if (value.length === 0) {
      setError("Заголовок не может быть пустым");
    } else {
      onCreateTask(value);
    }
  };

  return (
    <div className="add-modal">
      <div className="add-modal__container">
        <div className="add-modal__topline">
          <div className="add-modal__label">Краткое описание</div>

          <div className="add-modal__close-container">
            <CloseIcon onClick={onCloseModal} />
          </div>
        </div>

        <div className="add-modal__input">
          <CommonInputComponent ref={inputRef} />
        </div>

        <div className="add-modal__error">{error}</div>

        <div className="add-modal__create-container">
          <CommonButtonComponent
            text="Создать"
            color="green"
            onClick={handleAddTask}
          />
        </div>
      </div>
    </div>
  );
};

export default AddModalComponent;
