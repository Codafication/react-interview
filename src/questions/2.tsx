import React from "react";

//@ts-ignore
//eslint-disable-next-line
const list = ["eggs", "cheese", "ham", "flour", "bread"];

const Two = () => {
  return (
    <div>
      {list
        .sort((a, b) => (a > b ? -1 : 1))
        // OR sort().reverse()
        .map((item) => (
          <p>{item}</p>
        ))}
    </div>
  );
};

export default Two;
