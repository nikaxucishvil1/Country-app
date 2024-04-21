import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";

interface flags {
  svg: string | undefined;
  png: string;
}

interface DataName {
  common: string;
}

export interface country {
  name: DataName;
  population: number;
  region: string;
  capital: string;
  flags: flags;
}

function App() {
  const [countryData, setcountryData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://restcountries.com/v3.1/all");
      setcountryData(data.data);
    };

    getData();
  }, []);

  return (
    <>
      <Main datas={countryData} />

      <main>
        <div className="cardez">
          {countryData.splice(0, 8).map((item: country, index) => {
            return (
              <Card
                key={index}
                Name={item.name.common}
                Population={item.population}
                Region={item.region}
                Capital={item.capital}
                img={item.flags.png}
              />
            );
          })}{" "}
        </div>
      </main>
    </>
  );
}

export default App;
