import React from "react";

interface ICommonButtonComponent {
  text: string;
  color: "red" | "blue" | "green";

  onClick: () => void;
  disabled?: boolean;
}

const CommonButtonComponent: React.FC<ICommonButtonComponent> = ({
  text,
  color,

  onClick,
  disabled,
}) => {
  return (
    <button
      className={`common-button common-button_${color} ${
        disabled ? "common-button_disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CommonButtonComponent;
