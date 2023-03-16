import React from "react";

const items = ["One", "Two", "Three", "Four"];
const Four = () => {
  const [value, setValue] = React.useState<string>("");
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)}></input>
      {items
        .filter((i) => i.toLowerCase().includes(value.toLowerCase()))
        .map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
    </div>
  );
};

export default Four;
