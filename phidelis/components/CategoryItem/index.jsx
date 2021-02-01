import { useEffect, useState } from "react";
import styles from "./CategoryItem.module.scss";
const CategoryItem = ({ name }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [btnClass, setBtnClass] = useState("btn-outline-primary");
  useEffect(() => {
    if (isSelected) {
      setBtnClass("btn-primary");
    } else {
      setBtnClass("btn-outline-primary");
    }
  }, [isSelected]);
  return (
    <div
      className={`btn rounded-pill m-2 ${btnClass} ${styles.categoryItem}`}
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    >
      {name}
    </div>
  );
};

export default CategoryItem;
