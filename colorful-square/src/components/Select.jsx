const Select = ({ onChange, value, data }) => {
  return (
    <div>
      <select
        onChange={onChange}
        value={value}
        className="font-sans outline-none rounded-md border border-solid border-indigo-500 my-8 bg-purple-200 p-0.5"
      >
        {data.map(({ color, text }) => {
          return (
            <option key={color} value={color}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
