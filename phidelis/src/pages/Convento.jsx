import { Footer } from "../components/Footer";

export const Convento = () => {
  return (
    <div className="convento">
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>
                Conheça o <br />
                convento da <br />
                penha por dentro
              </h1>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src="/img/img-trip-card.png" alt="Convento" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <div className="author d-flex flex-row align-items-center">
              <img src="/img/author.png" alt="Autor" />
              <div className="ms-3">
                <div className="h6 m-0">Ana Furtado</div>
                <div className="text-muted">Estagiária de conteúdo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-row justify-content-center text">
          <div className="col-8">
            <p>
              Etiam eget ligula in dolor posuere vestibulum ullamcorper vitae
              ex. Pellentesque quis dolor malesuada, varius mi suscipit, egestas
              mauris. Sed non quam nunc. Ut eu nibh lectus. Donec pretium turpis
              nec fermentum malesuada. Praesent ultricies gravida leo ac cursus.
              Nullam vel quam sed urna fringilla blandit. Integer vehicula nulla
              eros, vel condimentum leo faucibus sit amet. Proin mattis rutrum
              eros.
            </p>
            <p>
              Proin vitae justo ex. Ut ultricies vehicula nunc eu facilisis.
              Maecenas gravida odio nec risus molestie, vel interdum nisl
              placerat. Nunc eget blandit magna, quis luctus eros.
            </p>
            <p>
              Etiam eget ligula in dolor posuere vestibulum ullamcorper vitae
              ex. Pellentesque quis dolor malesuada, varius mi suscipit, egestas
              mauris. Sed non quam nunc. Ut eu nibh lectus. Donec pretium turpis
              nec fermentum malesuada.
            </p>
            <p>- Praesent ultricies gravida leo ac cursus.</p>
            <p>- Nullam vel quam sed urna fringilla blandit.</p>
            <p>
              - Integer vehicula nulla eros, vel condimentum leo faucibus sit
              amet.
            </p>
            <p>- Proin mattis rutrum eros.</p>
            <p>
              Vestibulum facilisis elit nibh, eu laoreet ipsum fermentum eget.
              Pellentesque ornare erat id ligula blandit scelerisque. Praesent
              condimentum malesuada est eget tincidunt. Nunc purus nisl, commodo
              non finibus quis, eleifend eu elit. Integer consectetur libero sed
              erat aliquam feugiat. Suspendisse id maximus dui, sed fermentum
              justo.
            </p>
            <img src="/img/convento.png" alt="Convento da Penha" />
            <p>
              Maecenas ac nisi efficitur, maximus metus et, dictum turpis.Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Vestibulum sed arcu vehicula, feugiat
              felisquis, viverra tortor. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris molestie, neque ut malesuada pharetra,
              enim neque vehicula magna, egestas congue odio tortor eu magna.
              Duis facilisis, enim laoreet pulvinar cursus, ante dolor bibendum
              libero, quis iaculis elit ante a nunc.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
