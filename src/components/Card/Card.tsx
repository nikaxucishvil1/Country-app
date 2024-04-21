import { useNavigate } from "react-router-dom";
import "./card.css";
import { useEffect, useState } from "react"
import axios from "axios";

interface Card {
  Name: string;
  Population: number;
  Region: string;
  Capital: string;
  img: string;
}

function Card(props: Card) {
  const { Name, Population, Region, Capital, img } = props;
  const [countryData, setcountryData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://restcountries.com/v3.1/all");
      setcountryData(data.data);
    };

    getData();
  }, []);

  const navigate = useNavigate();
  
  const exportArr = () => {
    return navigate("/Single", {
      state: {
        countryData,
        Name,
      },
    });
  };

  return (
    <>
      <div className="aroundCard" onClick={exportArr}>
        <div className="card">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="info">
            <h1>{Name}</h1>
            <div className="addInfo">
              <div>
                <span>Population: </span>
                <p>{Population}</p>
              </div>
              <div>
                <span>Region: </span>
                <p>{Region}</p>
              </div>
              <div>
                <span>Capital: </span>
                <p>{Capital}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
