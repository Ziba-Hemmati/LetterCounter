const Box = ({ color }) => {
  return (
    <div
      className=" rounded-md"
      style={{ width: 150, height: 150, backgroundColor: color }}
    ></div>
  );
};

export default Box;
