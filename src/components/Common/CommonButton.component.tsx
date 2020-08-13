import React from "react";

interface ICommonButtonComponent {
  text: string;
  color: "red" | "blue" | "green";

  onClick: () => void;
}

const CommonButtonComponent: React.FC<ICommonButtonComponent> = ({
  text,
  color,

  onClick,
}) => {
  return (
    <button
      className={`common-button common-button_${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CommonButtonComponent;
