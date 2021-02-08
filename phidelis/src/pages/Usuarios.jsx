import { Link } from "react-router-dom";
export const Usuarios = () => {
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
                  Usuarios
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
                      <th>Usuário</th>
                      <th>E-mail</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Ana Furtado</td>
                      <td>ana@email.com</td>
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
                      <td>Ana Furtado</td>
                      <td>ana@email.com</td>
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
                      <td>Ana Furtado</td>
                      <td>ana@email.com</td>
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
                      <td>Ana Furtado</td>
                      <td>ana@email.com</td>
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
                      <td>Ana Furtado</td>
                      <td>ana@email.com</td>
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
                      <td>Ana Furtado</td>
                      <td>ana@email.com</td>
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
