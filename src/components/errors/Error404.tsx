import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            <span className="text-danger">Opps!</span> No has iniciado sesión.
          </p>
          <p className="lead">
            Puedes dirigirte <Link to="/">Iniciar sesión</Link>
          </p>
        </div>
      </div>

      <Link to="/">Login</Link>
    </div>
  );
};

export default Error404;
