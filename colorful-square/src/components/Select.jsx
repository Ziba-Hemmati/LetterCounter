import { useState } from "react";
import Box from "./Box";

const data = [
  { color: "red", text: "Red" },
  { color: "blue", text: "Blue" },
  { color: "green", text: "Green" },
  { color: "yellow", text: "Yellow" },
  { color: "purple", text: "Purple" },
];

const Select = () => {
  const [value, setValue] = useState("");
  const changHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select onChange={changHandler} value={value}>
        <option value="">Select a color</option>
        {data.map(({ color, text }) => {
          return (
            <option key={color} value={color}>
              {text}
            </option>
          );
        })}
      </select>
      <Box color={value} />
    </div>
  );
};

export default Select;
