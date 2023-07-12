import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const count = value.length;

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="font-sans">
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        className="outline-none rounded-md border border-solid border-indigo-500 my-8 bg-purple-200 "
        ref={input}
      />
      <p className="rounded-md border border-solid border-indigo-500  bg-purple-200">
        Character count : {count}
      </p>
    </div>
  );
};

export default Counter;
