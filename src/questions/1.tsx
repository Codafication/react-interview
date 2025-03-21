import React from "react";

//@ts-ignore
//eslint-disable-next-line
const list = ["eggs", "cheese", "ham", "flour", "bread"]; //use this variable

const One = () => {
  list.forEach((i) => {});
  return (
    <div>
      {list.map((i) => {
        if (list.indexOf(i) % 2 !== 0)
          return <div>{i}</div>;
      })}
    </div>
  );
};

export default One;
