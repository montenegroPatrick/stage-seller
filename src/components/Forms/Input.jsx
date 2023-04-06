"use client";

import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function InputByUs({ name, inputRef, ...props }) {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {});
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Input
      variant="standard"
      name={name}
      value={inputValue}
      inputRef={inputRef}
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
