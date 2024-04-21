import "./select.css";
import { CountryInfo } from "../../types/data";
import {  useNavigate } from "react-router-dom"


function SearchChild() {
  return (
    <div className="searchChild">
      <p>Filter by Region</p>
      <img src="/src/assets/arr.svg" alt="" />
    </div>
  );
}

interface select {
  data: CountryInfo[];
}

interface regions {
  region: string;
}



function Select(props: select) {
  const { data } = props;
  const regions = data.map((item: regions) => item.region);
  const result = [...new Set(regions)];

  const navigate = useNavigate()
  

  const handleChange = (event: { target: { value: any; }; }) => {
    const selectedOption = event.target.value;
        navigate(`/${selectedOption}`,{
          state:{
            data,
          }
        });
};
  
  

  return (
    <div className="select">
      <select name="regions" id="select" aria-placeholder="sumt" onChange={handleChange}>
        <option className="sum" style={{ display: "none" }}>
          <SearchChild />
        </option>
        {result.map((item,index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
