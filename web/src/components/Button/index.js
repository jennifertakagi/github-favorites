import React from "react";

import "./styles.css";

function Button({ type, onClick, children }) {
  return (
    <button type={type} onClick={onClick}>{children }</button>
  );
}

export default Button;
