import { FC } from 'react';
import '../../App.css';
import Select from 'react-select';

interface outputListState {
  itemOutputAdd: any;
  itemOutput: any;
  itemClient: any;
  searchProduct: any;
  onChange: any;
  onSubmit: any;
  onChangeInput: any;
  onChangeProduct: any;
  onChangeoutputType: any;
}

const OutputAdd: FC<outputListState> = (props) => {
  const {
    itemOutput,
    itemClient,
    onChange,
    onSubmit,
    onChangeProduct,
    itemOutputAdd,
    onChangeoutputType,
    onChangeInput,
    searchProduct
  } = props;

  const categoryObjet = itemOutput.category;
  const outputTypeObjet = itemOutput.outputType;
  const productsObjet = searchProduct.data;
  const clientObjet = itemClient.clientOutput;

  return (
    <div className="row  mb-lg-3">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-md-12 mb-lg-0 mb-4">
            <div className="card mt-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h6 className="text-white text-capitalize ps-3">Salidas </h6>
                </div>
              </div>

              <div className="card-body p-3">
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-3 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label className="mb-3">Referencia de salidad</label>
                        <input
                          onChange={onChangeInput}
                          type="text"
                          name="inv_order"
                          id="inv_order"
                          className="form-control"
                          placeholder="Escribe la referencia de salida"
                          disabled={
                            itemOutputAdd &&
                            itemOutputAdd !== null &&
                            itemOutputAdd !== undefined &&
                            itemOutputAdd.length
                              ? true
                              : false
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="col-2 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          A donde sale
                        </label>
                        <Select
                          className="form-control"
                          onChange={onChangeoutputType}
                          name="inv_output_type"
                          id="inv_output_type"
                          defaultValue={{ value: '', label: '- Seleccione salida -' }}
                          required
                          options={
                            outputTypeObjet &&
                            outputTypeObjet !== null &&
                            outputTypeObjet !== undefined &&
                            outputTypeObjet.length !== 0 &&
                            outputTypeObjet.map((item: any) => ({
                              name: 'inv_output_type',
                              value: item.id,
                              label: item.ot_name
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-2 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Tansformador
                        </label>
                        <Select
                          className="form-control"
                          onChange={onChange}
                          name="inv_client"
                          id="inv_client"
                          defaultValue={{
                            value: '',
                            label: '- Seleccione transformador -'
                          }}
                          required
                          options={
                            clientObjet &&
                            clientObjet !== null &&
                            clientObjet !== undefined &&
                            clientObjet.length !== 0 &&
                            clientObjet.map((item: any) => ({
                              name: 'inv_client',
                              value: item.id,
                              label: item.ci_name
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-4 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Calse
                        </label>
                        <Select
                          className="form-control"
                          onChange={onChangeProduct}
                          name="inv_category"
                          id="inv_category"
                          defaultValue={{ value: '', label: '- Seleccione clase -' }}
                          required
                          options={
                            categoryObjet &&
                            categoryObjet !== null &&
                            categoryObjet !== undefined &&
                            categoryObjet.length !== 0 &&
                            categoryObjet.map((item: any) => ({
                              name: 'inv_category',
                              value: item.id,
                              label: item.ct_name
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Producto
                        </label>
                        <Select
                          className="form-control"
                          onChange={onChange}
                          name="inv_invetary"
                          id="inv_invetary"
                          defaultValue={{ value: '', label: '- Seleccione producto -' }}
                          required
                          options={
                            productsObjet &&
                            productsObjet !== null &&
                            productsObjet !== undefined &&
                            productsObjet.length !== 0 &&
                            productsObjet.map((item: any) => ({
                              name: 'inv_invetary',
                              value: item.id,
                              label: `${item.inv_product} - 
                                  ${item.inv_ref} - ${item.inv_color}
                                  ${
                                    item.inv_size === 'NO APLICA'
                                      ? ''
                                      : ' - ' + item.inv_size
                                  }
                                  `
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div className="col-2 col-md-1">
                      <div className="input-group input-group-static mb-4">
                        <label className="mb-3">Cantidad</label>
                        <input
                          onChange={onChangeInput}
                          type="number"
                          name="inv_cout"
                          id="inv_cout"
                          className="form-control"
                          placeholder="0"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-1">
                      <button className="btn bg-gradient-warning " type="submit">
                        <i className="material-icons text-sm">add</i>
                        <br />
                        Agregar
                      </button>
                    </div>
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

export default OutputAdd;
