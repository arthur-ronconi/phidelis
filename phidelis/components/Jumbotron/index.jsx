import styles from "./Jumbotron.module.scss";
const Jumbotron = () => {
  return (
    <div className={`jumbotron ${styles.customJumbotron}`}>
      <div className="container h-100 d-flex flex-column justify-content-center">
        <div className="row my-auto">
          <div className="col-12 col-md-6">
            <h1>Descubra diversos lugares e as melhores experiências aqui!</h1>
            <div className="d-flex flex-row align-items-center justify-content-start mt-5">
              <a href="#" className={`${styles.playIcon}`}>
                <i className="bi bi-play-fill icon"></i>
              </a>
              <span>Assistir vídeo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
