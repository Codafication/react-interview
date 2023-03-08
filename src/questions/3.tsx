import React from "react";

const items = ["one", "two", "three", "four"];
const Three = () => {
  const [isReversed, setIsReversed] = React.useState<boolean>(false);

  const list = isReversed ? items.reverse().slice() : items;

  return (
    <div>
      <button onClick={() => setIsReversed(!isReversed)}>Reverse List</button>
      {list.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Three;
