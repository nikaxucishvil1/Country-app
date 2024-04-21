import "./single.css";
import Header from "../Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { country } from "../../App";
import { CountryInfo } from "../../types/data";
import Button from "./Button";

const Single = () => {
  const location = useLocation();
  const { countryData, Name } = location.state;

  const data = countryData.filter((item: country) => item.name.common === Name);
  const navigate = useNavigate();
  const foo = () => {
    navigate("/");
  };

  return (
    <>
      <Header onClick={() => {}} />

      {data &&
        data.map((item: CountryInfo, index: number) => {
          const population = item.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          const currencie =
            item.currencies[Object.keys(item.currencies)[0]].name;

          return (
            <>
              <div className="bod" key={index}>
                <div className="SingleTop">
                  <button className="BackButton" onClick={foo}>
                    <FaLongArrowAltLeft />
                    Back
                  </button>
                </div>
                <div className="mainSingle">
                  <div className="singleImg">
                    <img src={item.flags.svg} alt="" />
                  </div>
                  <div className="content">
                    <div className="fix">
                    <div className="Maininfo">
                      <div className="title">
                        <h1>{item.name.common}</h1>
                      </div>
                      <div className="MainTxts">
                        <p className="mainInfoP">
                          <b>Native Name:</b> {item.translations.nld.common}
                        </p>
                        <p className="mainInfoP">
                          <b>Population:</b> {population}
                        </p>
                        <p className="mainInfoP">
                          <b>Region:</b> {item.region}
                        </p>
                        <p className="mainInfoP">
                          <b>Sub Region:</b> {item.subregion}
                        </p>
                        <p className="mainInfoP">
                          <b>Capital:</b> {item.capital}
                        </p>
                      </div>
                    </div>
                    <div className="secondaryInfo">
                      <p className="secP">
                        <b>Top Level Domain:</b> {item.tld}
                      </p>
                      <p className="secP">
                        <b>Currencies:</b> {currencie}
                      </p>
                      <p className="secP">
                        <b>Languages:</b>{" "}
                        {Object.values(item.languages).join(" ")}
                      </p>
                    </div>
                    </div>
                    <div className="singleFooter">
                      <div className="footerHeadDiv">
                        <h1 className="footerTitle">
                          <b>Border Countries: </b>
                        </h1>
                      </div>
                      <div className="BtnsDiv">
                        <Button data={item.borders} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Single;
