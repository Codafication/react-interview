import React, { useEffect, useState } from "react";

interface Planet {
  name: string;
}

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
  const [values, setValues] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        setValues(data.results.map((r: Planet) => r.name));
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        values.map((item, i) => {
          return <p key={i}>{item}</p>;
        })
      )}
    </div>
  );
};

export default Five;
