import React, { useState } from "react";

const Two = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const handleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={handleVisibility}>Toggle</button>
      {visible && <div>Toggle showing/hiding me</div>}
    </div>
  );
};

export default Two;
