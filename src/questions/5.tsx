import React from "react";

const items = ["one", "two", "three", "four"];
const Five = () => {
  return (
    <div>
      {/*Place the input here*/}
      {items.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Five;
