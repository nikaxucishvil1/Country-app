import Select from "../components/Select/Select";
import Search from "../components/SearchBar/Search";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import { country } from "../App";
import { useLocation } from "react-router-dom";

function Oceania() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <>
      <div className="top">
        <Header onClick={() => {}} />
        <div className="searchDiv">
          <Search />
          <Select data={data} />
        </div>
      </div>
      <main>
        <div className="cardez">
          {data
            .filter((item: country) => item.region === "Oceania")
            .splice(0, 8)
            .map((item: country, index: number) => {
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

export default Oceania;
