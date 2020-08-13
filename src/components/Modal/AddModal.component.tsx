import React, { useRef, useState, useEffect } from "react";

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
  let modalRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as HTMLInputElement)
      ) {
        onCloseModal();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, onCloseModal]);

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
      <div className="add-modal__container" ref={modalRef}>
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
