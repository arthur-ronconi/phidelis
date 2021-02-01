import styles from "./TripCard.module.scss";
const TripCard = ({ text, tag }) => {
  return (
    <div className={`card ${styles.tripCard}`}>
      <div className="card-body">
        <h6>{text}</h6>
      </div>
    </div>
  );
};
export default TripCard;
