import React, { FC } from 'react';

interface addListOutputState {
  itemOutputAdd: any;
  onClick: any;
  onSubmit: any;
}

const OutputAddList: FC<addListOutputState> = (props) => {
  const { itemOutputAdd, onClick, onSubmit } = props;
  return (
    <div className="row">
      <div className="col-md-12 mt-4">
        <div className="card">
          <div className="card-header pb-0 px-3">
            <h6 className="mb-0">Productos a salir</h6>
          </div>
          <div className="card-body pt-4 p-3">
            <ul className="list-group">
              {itemOutputAdd &&
                itemOutputAdd !== null &&
                itemOutputAdd !== undefined &&
                itemOutputAdd.map((item: any) => (
                  <>
                    {/* TODO organizar el diseño  */}
                    <li className="list-group-item border-0   p-4 mb-2 bg-gray-100 border-radius-lg">
                      <div className="row">
                        <div className="p-2  col">
                          <div className="d-flex flex-column">
                            <h1 className="mb-3 text-sm ">
                              {item.inv_invetary_inv_product} -{' '}
                              {item.inv_invetary_inv_ref}
                            </h1>
                            <span className="mb-2 text-xs">
                              Proveedor:
                              <span className="text-dark font-weight-bold ms-sm-2">
                                {item.inv_invetary_inv_provider}
                              </span>
                            </span>

                            <span className="text-xs">
                              Color:
                              <span className="text-dark font-weight-bold ms-sm-2">
                                {item.inv_invetary_inv_color}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="p-2  col">
                          <div className="d-flex flex-column">
                            <h6 className="mb-3 text-sm"> </h6>
                            <span className="mb-2 text-xs">
                              <span className="mb-2 text-xs">
                                Adonde sale:
                                <span className="text-dark ms-sm-2 font-weight-bold">
                                  {item.inv_output_type_ot_name}
                                </span>
                              </span>
                            </span>
                            <span className="mb-2 text-xs">
                              Tansformador
                              <span className="text-dark ms-sm-2 font-weight-bold">
                                {item.inv_client_ci_name}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="p-2  col">
                          <div className="d-flex flex-column">
                            <h6 className="mb-3 text-sm"> </h6>
                            <span className="mb-2 text-xs">
                              Talla:
                              <span className="text-dark ms-sm-2 font-weight-bold">
                                {item.inv_invetary_inv_size}
                              </span>
                            </span>
                            <span className="mb-2 text-xs">
                              Cantidad que sale:
                              <span className="text-dark ms-sm-2 font-weight-bold">
                                {item.inv_cout} - {item.inv_invetary_inv_measure}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="p-2  col text-end">
                          <button
                            className="btn btn-link text-danger text-gradient px-3 mb-0"
                            type="button"
                            onClick={() => onClick(item.id)}
                          >
                            <i className="material-icons text-sm me-2">delete</i>Eliminar
                          </button>
                        </div>
                      </div>
                    </li>
                  </>
                ))}
            </ul>
          </div>
          {itemOutputAdd &&
          itemOutputAdd !== null &&
          itemOutputAdd !== undefined &&
          itemOutputAdd.length ? (
            <div className="card-header pb-0 px-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onSubmit()}
              >
                <i className="material-icons text-sm me-2">delete</i>Enviar
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputAddList;
