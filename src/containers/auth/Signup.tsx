import React from 'react';

const Signup = () => {
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
                    Sign in
                  </h4>
                  <div className="row mt-3">
                    <div className="col-2 text-center ms-auto"></div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form role="form" className="text-start">
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Last Name</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Re Password</label>
                    <input type="password" className="form-control" />
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="btn bg-gradient-primary w-100 my-4 mb-2"
                    >
                      Sign up
                    </button>
                  </div>
                  <p className="mt-4 text-sm text-center">
                    Already have an account?
                    <a
                      href="../pages/sign-up.html"
                      className="text-primary text-gradient font-weight-bold"
                    >
                      Sign in
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
