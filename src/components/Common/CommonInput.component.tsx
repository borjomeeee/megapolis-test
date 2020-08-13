import React from "react";

const CommonInputComponent: React.FC<React.ComponentProps<"input">> = ({
  ...props
}) => {
  return <input {...props} className={`input ${props.className}`} />;
};

export default CommonInputComponent;
