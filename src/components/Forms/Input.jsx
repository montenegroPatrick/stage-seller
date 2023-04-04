"use client";

import { useState } from "react";

export default function InputByUs({ name, inputRef, ...props }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input name={name} value={inputValue} onChange={handleChange} {...props} />
  );
}

// Input.propTypes = {
//   name: PropTypes.string.isRequired,
//   inputRef: PropTypes.shape({
//     current: PropTypes.any,
//   }).isRequired,
// };