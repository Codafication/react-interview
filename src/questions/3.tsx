import React from "react";

const Two = () => {
  const [clicked, setClicked] = React.useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setClicked(!clicked)}>Toggle</button>
      {clicked && <div>Toggle showing/hiding me</div>}
    </div>
  );
};

export default Two;
