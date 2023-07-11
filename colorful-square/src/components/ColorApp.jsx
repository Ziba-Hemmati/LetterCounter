import { useState } from "react";
import Select from "./Select";
import Box from "./Box";

const data = [
  { color: "red", text: "Red" },
  { color: "purple", text: "Purple" },
  { color: "Pink", text: "Pink" },
  { color: "lightGreen", text: "LightGreen" },
  { color: "lightBlue", text: "LightBlue" },
];
const ColorApp = () => {
  const [value, setValue] = useState("red");
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="  flex flex-col items-center justify-center">
      <Select onChange={changeHandler} value={value} data={data} />
      <Box color={value} />
    </div>
  );
};

export default ColorApp;
