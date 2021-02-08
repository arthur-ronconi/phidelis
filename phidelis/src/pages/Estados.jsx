import { Link } from "react-router-dom";
export const Estados = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <h1 className="h2">Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              style={{ "--bs-breadcrumb-divider": "'>'" }}
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item ">
                  <Link to="/dashboard">Início</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Estados
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <a href="#" className="btn btn-success rounded-pill px-4">
                  Adicionar novo
                </a>
                <table className="table table-striped mt-4">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Estado</th>
                      <th>UF</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>São Paulo</td>
                      <td>SP</td>
                      <td>
                        <button>
                          <i className="bi bi-trash"></i>
                        </button>
                        <button>
                          <i className="bi bi-pencil"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Espírito Santo</td>
                      <td>ES</td>
                      <td>
                        <button>
                          <i className="bi bi-trash"></i>
                        </button>
                        <button>
                          <i className="bi bi-pencil"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Rio de Janeiro</td>
                      <td>RJ</td>
                      <td>
                        <button>
                          <i className="bi bi-trash"></i>
                        </button>
                        <button>
                          <i className="bi bi-pencil"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>Minas Gerais</td>
                      <td>MG</td>
                      <td>
                        <button>
                          <i className="bi bi-trash"></i>
                        </button>
                        <button>
                          <i className="bi bi-pencil"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Ceará</td>
                      <td>CE</td>
                      <td>
                        <button>
                          <i className="bi bi-trash"></i>
                        </button>
                        <button>
                          <i className="bi bi-pencil"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>Bahia</td>
                      <td>BA</td>
                      <td>
                        <button>
                          <i className="bi bi-trash"></i>
                        </button>
                        <button>
                          <i className="bi bi-pencil"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
