import React, { FC, useState, useEffect, EffectCallback } from 'react';
import { connect } from 'react-redux';
import { signinAction } from '../../redux/actions/authAction';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface signinProps {
  data: any;
  signinAction(email: string, password: string): void;
}

const MySwal = withReactContent(Swal);

const Signin: FC<signinProps> = ({ data, signinAction }) => {
  const [userEmail, setUserEmail] = useState('' as string);
  const [userPassword, setUserPassword] = useState('' as string);
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signinAction(userEmail, userPassword);
  };
  useEffect((): ReturnType<EffectCallback> => {
    window.scrollTo();
    if (data) {
      MySwal.fire({
        title: 'Bienvenido!',
        icon: 'success',
        text: 'Bien benido'
      });

      navigate('/home');
    } else if (data === false) {
      MySwal.fire({
        title: 'Opss!',
        icon: 'warning',
        text: 'Los valores digitado estan incorrectos'
      });

      navigate('/');
    }
  }, [navigate, data]);

  return (
    <div className="page-header align-items-start min-vh-100">
      <span className="mask bg-gradient-dark opacity-6" />
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                    Iniciar sesión en Agucor
                  </h4>
                  <div className="row mt-3">
                    <div className="col-2 text-center ms-auto"></div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={handleOnSubmit} className="text-start">
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      onChange={(e) => setUserPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn bg-gradient-primary w-100 my-4 mb-2"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { signinAction })(Signin) as any;
