import React, { useState } from "react";

const items = ["one", "two", "three", "four"];
const Four = () => {
  const [filter, setFilter] = useState<string>("");

  return (
    <div>
      <input onChange={(e) => setFilter(e.target.value)} />
      {items
        .filter((i) => i.toLowerCase().includes(filter.toLowerCase()))
        .map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
    </div>
  );
};

export default Four;
