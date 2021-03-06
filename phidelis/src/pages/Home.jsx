import { useState } from "react";
import { Footer } from "../components/Footer";
import { Trips } from "../components/Trips";

export const Home = () => {
  const [videoIsVisible, setVideoIsVisible] = useState(false);
  return (
    <div className="home">
      <div className="jumbotron d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>
                Descubra diversos lugares e as melhores experiências aqui!
              </h1>
              <div className="d-flex flex-row align-items-center justify-content-start mt-5">
                <button
                  className="toggle-video"
                  onClick={() => setVideoIsVisible(true)}
                >
                  <i className="bi bi-play-fill"></i>
                </button>
                <p className="mb-0 ms-4 button-support">Assistir vídeo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <div className="text-center">
              <h2>Viaje conosco pelo Brasil</h2>
              <p className="text-muted">
                O objetivo do blog é compartilhar as experiências vivenciadas
                nas viagens pelo Brasil.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card mb-5 p-4">
              <div className="card-body">
                <div className="h2 search-title">Comece sua busca</div>
                <div className="input-group mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control border-end-0"
                    placeholder="Pra onde você quer ir?"
                  />
                  <button
                    className="input-group-text bg-white border-start-0"
                    id="basic-addon1"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Trips />
      </div>
      <Footer />

      {videoIsVisible && (
        <div className="video d-flex flex-column justify-content-center align-items-center">
          <img src="/img/video.png" alt="Vídeo" />
          <button
            className="btn btn-primary rounded-pill mt-3 px-3"
            onClick={() => setVideoIsVisible(false)}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};
