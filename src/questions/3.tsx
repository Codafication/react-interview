import React from "react";

const items = ["one", "two", "three", "four"];
const Three = () => {
  const [isReversed, setIsReversed] = React.useState<boolean>(false);
  const [itemList, setItemList] = React.useState<string[]>(items);
  const list = isReversed ? items.reverse() : items;
  const rev = () => {
    setIsReversed(!isReversed);
    setItemList([...itemList].reverse());
  };
  return (
    <div>
      <button onClick={rev}>Reverse List</button>
      {itemList.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Three;
