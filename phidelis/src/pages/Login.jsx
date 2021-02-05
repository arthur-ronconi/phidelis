import { Link, useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/dashboard");
  };
  return (
    <div className="login d-flex flex-column justify-content-center">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col-lg-3 text-center">
          <div className="card">
            <div className="card-body">
              <h4>Login</h4>
              <div className="d-flex flex-row align-items-center justify-content-between px-2">
                <div>Não possui uma conta?</div>
                <a href="#">Cadastre-se</a>
              </div>
              <div className="input-group mb-3 mt-3">
                <input
                  type="text"
                  className="form-control border-end-0"
                  placeholder="E-mail"
                />
                <div
                  className="input-group-text bg-white border-start-0"
                  id="basic-addon1"
                >
                  <i className="bi bi-envelope"></i>
                </div>
              </div>
              <div className="input-group mb-3 mt-3">
                <input
                  type="text"
                  className="form-control border-end-0"
                  placeholder="Senha"
                />
                <div
                  className="input-group-text bg-white border-start-0"
                  id="basic-addon1"
                >
                  <i className="bi bi-lock"></i>
                </div>
              </div>
              <div className="d-flex flex-column">
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick()}
                >
                  Entrar
                </button>

                <a href="#" className="mt-3">
                  Esqueci minha senha
                </a>
              </div>
            </div>
          </div>
          <img src="/img/Logo.png" alt="Phidelis" className="mt-3" />
        </div>
      </div>
    </div>
  );
};
