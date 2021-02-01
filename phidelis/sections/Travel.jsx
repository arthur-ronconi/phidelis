import Categories from "../components/Categories";
import SearchBox from "../components/SearchBox";
import SearchHeader from "../components/SearchHeader";

const Travel = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <SearchHeader />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SearchBox />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Travel;
