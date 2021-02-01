import states from "../../data/states.json";
import CategoryItem from "../CategoryItem";
import styles from "./Categories.module.scss";
const Categories = () => {
  return (
    <div className={`my-5 ${styles.categories}`}>
      <h5 className="mb-4">Viagens por estado</h5>
      <div className="state-list">
        {states.UF.map((item) => {
          return <CategoryItem name={item.nome} key={item.sigla} />;
        })}
      </div>
    </div>
  );
};
export default Categories;
