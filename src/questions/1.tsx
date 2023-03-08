import React from "react";

//@ts-ignore
//eslint-disable-next-line
const list = ["eggs", "cheese", "ham", "flour", "bread"]; //use this variable

const One = () => {
  return (
    <div>
      {list.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default One;
