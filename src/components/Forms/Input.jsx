"use client";

import { Input } from "@material-tailwind/react";
import { useState } from "react";

export default function InputByUs({ name, inputRef, ...props }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Input
      name={name}
      value={inputValue}
      ref={inputRef}
      onChange={handleChange}
      {...props}
    />
  );
}

// Input.propTypes = {
//   name: PropTypes.string.isRequired,
//   inputRef: PropTypes.shape({
//     current: PropTypes.any,
//   }).isRequired,
// };
