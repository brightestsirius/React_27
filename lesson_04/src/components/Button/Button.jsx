import React from "react";

export default function Button({
  title = ``,
  handleClick,
  className: classNameProps,
}) {
  return (
    <button className={classNameProps} onClick={handleClick}>
      {title}
    </button>
  );
}
