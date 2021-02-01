import styles from "./TravelMain.module.scss";
import trips from "../../data/trips.json";
import TripCard from "../TripCard";
const TravelMain = () => {
  return (
    <div className={`my-5 ${styles.categories}`}>
      <h5 className="mb-4">Viagens por estado</h5>
      <div className="row">
        {trips.map((item) => {
          return (
            <div key={Math.random()} className="col-3 mb-3 d-flex">
              <TripCard text={item.text} tag={item.tag} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TravelMain;
