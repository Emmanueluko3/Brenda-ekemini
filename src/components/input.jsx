import React from "react";
import "../styles/allComponents.css";

function Input(props) {
  const { type, placeholder } = props;
  return (
    <>
      <input type={type} placeholder={placeholder} />
    </>
  );
}

export default Input;
