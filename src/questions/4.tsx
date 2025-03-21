import React from "react";

const items = ["one", "two", "three", "four"];

const Four = () => {
  const [filter, setFilter] = React.useState<string>("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/*Place the input here*/}
      <input onChange={(e) => setFilter(e.target.value)}></input>
      {filteredItems.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Four;
