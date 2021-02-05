import states from "../data/states.json";
import mainTrips from "../data/mainTrips.json";
import { StateButton } from "./StateButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Trips = () => {
  const [filterList, setFilterList] = useState("");
  const handleClick = (item) => {
    if (filterList.includes(item)) {
      setFilterList(filterList.filter((item) => item !== item)); // ???
    } else {
      setFilterList([...filterList, item]);
    }
  };
  useEffect(() => {
    console.log(filterList);
  }, [filterList]);
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5>Viagens por estado</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="states-list">
            {states.UF.map((item) => {
              return (
                <StateButton
                  nome={item.nome}
                  sigla={item.sigla}
                  key={item.sigla}
                  callback={() => handleClick(item.sigla)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5 className="mb-3">Principais viagens</h5>
        </div>
      </div>
      <div className="row mb-5">
        {mainTrips
          .filter((val) => {
            if (filterList.length === 0) {
              return val;
            } else if (filterList.indexOf(val.state) > -1) {
              return val;
            }
          })
          .map((item) => {
            return (
              <div className="col-6 col-lg-3 d-flex" key={Math.random() * 100}>
                <div className="card mb-3 trip-card">
                  <div className="card-body">
                    <Link to={item.link}>
                      <p className="fw-bold">{item.text}</p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
