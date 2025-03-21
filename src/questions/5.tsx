import React, { useEffect, useState } from "react";

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
  const [loaded, setLoaded] = useState<boolean>(false);
  async function getData() {
    
    const url = "https://swapi.dev/api/planets";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const data = getData();
    setLoaded(true)
  }, []);

  return (
    <div>
      {!loaded && <div>loading</div>}
      
      {loaded && items.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Five;
