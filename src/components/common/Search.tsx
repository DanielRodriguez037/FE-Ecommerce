import { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Select from 'react-select';

interface searchListState {
  itemProdcut: any;
  onChange: any;
  onChangeInput: any;
  onSubmit: any;
  itemSearch: any;
  searchProduct: any;
  onChangeProduct: any;
  itemOutputSearch: any;
  itemClient: any;
  onDownloadExel: any;
  onChangeoutputType: any;
  selecteHidden: boolean;
  audit: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
const Search: FC<searchListState> = (props) => {
  const {
    audit,
    itemSearch,
    onSubmit,
    searchProduct,
    onChange,
    onChangeInput,
    onChangeProduct,
    itemOutputSearch,
    itemClient,
    onChangeoutputType,
    selecteHidden,
    onDownloadExel
  } = props;

  const url = `${process.env.REACT_APP_API_URL}/${onDownloadExel}/downlaod/`;

  const providerObjet = itemSearch.providers;
  const categoriesObjet = itemSearch.categories;
  const colorsObjet = itemSearch.colors;
  const sizesObjet = itemSearch.sizes;
  const outputObjet = itemOutputSearch.outputType;
  const productsObjet = searchProduct.products;
  const clientObjet = itemClient.clientOutput;

  return (
    <div className="row  mb-lg-3">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-md-12 mb-lg-0 mb-4">
            <div className="card mt-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h6 className="text-white text-capitalize ps-3">Buscador </h6>
                </div>
              </div>

              <div className="card-body p-3">
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-4 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Clase
                        </label>
                        <Select
                          className="form-control z-index-3"
                          classNamePrefix="select"
                          onChange={onChangeProduct}
                          name="category"
                          defaultValue={{ value: '', label: '- Seleccione clase -' }}
                          id="category"
                          options={
                            categoriesObjet &&
                            categoriesObjet !== null &&
                            categoriesObjet !== undefined &&
                            categoriesObjet.length !== 0 &&
                            categoriesObjet.map((item: any) => ({
                              name: 'category',
                              value: audit ? item.ct_name : item.id,
                              label: item.ct_name
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div className="col-4 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Producto
                        </label>
                        <Select
                          className="form-control  z-index-3"
                          onChange={onChange}
                          name="product"
                          id="product"
                          defaultValue={{ value: '', label: '- Seleccione producto -' }}
                          options={
                            productsObjet &&
                            productsObjet !== null &&
                            productsObjet !== undefined &&
                            productsObjet.length !== 0 &&
                            productsObjet.map((item: any) => ({
                              name: 'product',
                              value: audit
                                ? item.inv_product__pt_name
                                : item.inv_product__id,
                              label: `${item.inv_product__pt_name} - ${item.inv_product__pt_description}`
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-4 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Color
                        </label>
                        <Select
                          className="form-control  z-index-3"
                          classNamePrefix="select"
                          onChange={onChange}
                          name="color"
                          id="color"
                          defaultValue={{ value: '', label: '- Seleccione color -' }}
                          options={
                            colorsObjet &&
                            colorsObjet !== null &&
                            colorsObjet !== undefined &&
                            colorsObjet.length !== 0 &&
                            colorsObjet.map((item: any) => ({
                              name: 'color',
                              value: audit ? item.cl_name : item.id,
                              label: item.cl_name
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-4 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Proveedor
                        </label>
                        <Select
                          className="form-control  z-index-3"
                          onChange={onChange}
                          name="provider"
                          id="provider"
                          defaultValue={{ value: '', label: '- Seleccione proveedor -' }}
                          options={
                            providerObjet &&
                            providerObjet !== null &&
                            providerObjet !== undefined &&
                            providerObjet.length !== 0 &&
                            providerObjet.map((item: any) => ({
                              name: 'provider',
                              value: audit ? item.pr_name : item.id,
                              label: item.pr_name
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-3 col-md-1"></div>
                    <div className="col-1 "></div>
                    <div className="col-1">
                      <Link
                        className="btn bg-gradient-warning"
                        to="/output_inventory/"
                        hidden={selecteHidden ? false : true}
                      >
                        <i className="material-icons text-sm">output</i>
                        <br />
                        Salida
                      </Link>
                    </div>
                    <div className="col-1 ">
                      <button className="btn bg-gradient-info " type="submit">
                        <i className="material-icons text-sm">search</i>
                        <br />
                        Buscar
                      </button>
                    </div>
                    <div className="col-4 col-md-2">
                      <div className="input-group input-group-static mb-4">
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Talla
                        </label>
                        <Select
                          className="form-control react-select__control  z-index-2"
                          onChange={onChange}
                          name="size"
                          id="size"
                          defaultValue={{ value: '', label: '- Seleccione talla -' }}
                          options={
                            sizesObjet &&
                            sizesObjet !== null &&
                            sizesObjet !== undefined &&
                            sizesObjet.length !== 0 &&
                            sizesObjet.map((item: any) => ({
                              name: 'size',
                              value: audit ? item.sz_name : item.id,
                              label: item.sz_name
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div className="col-4 col-md-2">
                      <div className="input-group input-group-static mb-3">
                        <label className="mb-3">Desde </label>
                        <input
                          type="date"
                          name="since"
                          id="since"
                          onChange={onChangeInput}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-md-2">
                      <div className="input-group input-group-static mb-3">
                        <label className="mb-3">Hasta</label>
                        <input
                          type="date"
                          name="until"
                          id="until"
                          onChange={onChangeInput}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-md-2">
                      <div
                        className="input-group input-group-static mb-4"
                        hidden={selecteHidden ? true : false}
                      >
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Salio a
                        </label>
                        <Select
                          className="form-control z-index-2"
                          classNamePrefix="select"
                          onChange={onChangeoutputType}
                          name="output_type"
                          id="output_type"
                          defaultValue={{ value: '', label: '- Seleccione salida -' }}
                          options={
                            outputObjet &&
                            outputObjet !== null &&
                            outputObjet !== undefined &&
                            outputObjet.length !== 0 &&
                            outputObjet.map((item: any) => ({
                              name: 'output_type',
                              value: audit ? item.ot_name : item.id,
                              label: item.ot_name
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-4 col-md-2">
                      <div
                        className="input-group input-group-static mb-4"
                        hidden={selecteHidden ? true : false}
                      >
                        <label htmlFor="exampleFormControlSelect1" className="ms-0">
                          Tansformador
                        </label>
                        <Select
                          className="form-control z-index-2"
                          classNamePrefix="select"
                          onChange={onChange}
                          name="category"
                          id="category"
                          defaultValue={{
                            value: '',
                            label: '- Seleccione transformador -'
                          }}
                          options={
                            clientObjet &&
                            clientObjet !== null &&
                            clientObjet !== undefined &&
                            clientObjet.length !== 0 &&
                            clientObjet.map((item: any) => ({
                              name: 'client',
                              value: audit ? item.ci_name : item.id,
                              label: item.ci_name
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="col-1 "></div>
                    <div className="col-1 ">
                      <Link className="btn bg-gradient-success " to={url}>
                        <i className="material-icons text-sm">download</i>
                        <br />
                        Excel
                      </Link>
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

export default Search;
