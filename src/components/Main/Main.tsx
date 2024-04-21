import Select from "../Select/Select";
import Search from "../SearchBar/Search";
import Header from "../Header/Header";
import { CountryInfo } from "../../types/data";

interface Main {
  datas: CountryInfo[];
}

function Main(props: Main) {
  const { datas } = props;
  

  return (
    <>
      <div className="top">
        <Header />
        <div className="searchDiv">
          <Search />
          <Select data={datas} />
        </div>
      </div>
    </>
  );
}

export default Main;
