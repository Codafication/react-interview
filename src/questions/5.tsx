import React from "react";

const items = [
  "Tatooine",
  "Alderaan",
  "Yavin IV",
  "Hoth",
  "Dagobah",
  "Bespin",
  "Endor",
  "Naboo",
  "Coruscant",
  "Kamino",
];

const Five = () => {
  return (
    <div>
      {items.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Five;
