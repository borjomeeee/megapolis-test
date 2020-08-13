import React from "react";

const CommonInputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>((props, ref) => {
  return <input {...props} className={`input ${props.className}`} ref={ref} />;
});

export default CommonInputComponent;
