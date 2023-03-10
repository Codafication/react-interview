import React from "react";

const Five = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setCount(count + 1), 1000)
    return () => clearInterval(timer)
  })
  return <div>{count}</div>;
};

export default Five;
