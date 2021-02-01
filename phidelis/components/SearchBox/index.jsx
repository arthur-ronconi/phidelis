import styles from "./SearchBox.module.scss";
const SearchBox = () => {
  return (
    <div className={`card ${styles.searchBox}`}>
      <div className="card-body p-5">
        <h4 className="h2">Comece sua busca</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pra onde você quer ir?"
            aria-label="Pra onde você quer ir?"
          />
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
