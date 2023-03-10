import React from "react";

const Five = () => {
  const [count] = React.useState(0);
  return <div>{count}</div>;
};

export default Five;
