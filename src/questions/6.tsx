import React, { useEffect } from "react";

const Five = () => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{count}</div>;
};

export default Five;
