import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <h1 className="h2">Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <Link to="/dashboard/publicacoes">
              <div className="card">
                <div className="card-body">
                  <h6>Publicações</h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mb-3">
            <Link to="/dashboard/estados">
              <div className="card">
                <div className="card-body">
                  <h6>Estados</h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mb-3">
            <Link to="/dashboard/slider">
              <div className="card">
                <div className="card-body">
                  <h6>Slider</h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mb-3">
            <Link to="/dashboard/usuarios">
              <div className="card">
                <div className="card-body">
                  <h6>Usuários</h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
