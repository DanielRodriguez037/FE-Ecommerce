import { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  inventoryListAction,
  searchListAction,
  searchProcutAction,
  inputInventoryAction
} from '../../redux/actions/inventoryAction';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import InventoryTable from '../../components/inventory/InventoryTable';
import Search from '../../components/common/Search';
import Layout from '../../hocs/Layout';
import TableHead from '../../components/common/TableHead';

const MySwal = withReactContent(Swal);
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

const tableHead: string[] = [
  'Clase',
  'Proveedor',
  'Color',
  'Insomo',
  'Referencia',
  'Talla',
  'U.M',
  'Saldo',
  'C. unidad',
  'C. total',
  'Fecha',
  ''
];

interface searchListState {
  data: any;
  searchListAction(): void;
  searchProcutAction(product: string): void;
  inventoryListAction(
    category: string,
    provider: string,
    color: string,
    product: string,
    size: string,
    since: string,
    until: string,
    pageNext: number,
    pageLimit: number
  ): void;
  inputInventoryAction(
    id: number,
    unit_value: number,
    amount: number,
    invoice: string,
    provider: string
  ): void;
  search: any;
  search_product: any;
}

const Inventory: FC<searchListState> = (props) => {
  const {
    data,
    searchListAction,
    search,
    searchProcutAction,
    search_product,
    inventoryListAction,
    inputInventoryAction
  } = props;
  const [category, setProvider] = useState('' as string);

  const page = data.pages;
  const datas = data.data;

  useEffect(() => {
    window.scrollTo();
    searchListAction();
    inventoryListAction(
      category,
      provider,
      color,
      product,
      size,
      since,
      until,
      pageNext,
      20
    );
  }, [inventoryListAction, searchListAction]);

  const [formData, setFormData] = useState({
    category: null,
    provider: null,
    color: null,
    product: null,
    size: null,
    since: null,
    until: null,
    pageNext: null
  } as object);

  const { provider, color, product, size, since, until, pageNext }: any = formData;

  const handleChange = ({ value, name }: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    const pageNext = page;
    inventoryListAction(
      category,
      provider,
      color,
      product,
      size,
      since,
      until,
      pageNext,
      20
    );
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeProduct = ({ value }: any) => {
    searchProcutAction(value);
    if (!value) {
      setFormData({ product: null });
    }

    setProvider(value);
  };

  const handleClick = async (id: number) => {
    const product = datas
      .filter((data: any) => {
        return data.id === id;
      })
      .map((data: any) => {
        return data.inv_product + ' - ' + data.inv_ref;
      });

    const { value: formValues } = await MySwal.fire({
      title: `${product}`,
      html: (
        <div>
          <label className="form-label">Proveedor</label>
          <div className="input-group input-group-static mb-3">
            {search.providers && search.providers.length > 0 ? (
              <select className="form-control" name="provider" id="inprovider">
                <option value="">Selecciones un Proveedor</option>
                {search.providers.map((item: any) => (
                  <>
                    <option key={item.id} value={item.id}>
                      {item.pr_name}
                    </option>
                  </>
                ))}
              </select>
            ) : (
              <p>No hay proveedores disponibles</p>
            )}
          </div>
          <label className="form-label">Cantidad que entra</label>
          <div className="input-group input-group-static mb-3">
            <input type="number" className="form-control" id="inputVal" required />
          </div>
          <label className="form-label">Valor del producto</label>
          <div className="input-group input-group-static mb-3">
            <input type="number" className="form-control" id="amount" required />
          </div>
          <label className="form-label">Ref. Factura</label>
          <div className="input-group input-group-static mb-3">
            <input type="text" className="form-control" id="invoice" required />
          </div>
        </div>
      ),
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById('inputVal') as HTMLInputElement).value,
          (document.getElementById('amount') as HTMLInputElement).value,
          (document.getElementById('invoice') as HTMLInputElement).value,
          (document.getElementById('inprovider') as HTMLInputElement).value
        ];
      }
    });

    if (formValues) {
      const unit_value = datas
        .filter((data: any) => {
          return data.id === id;
        })
        .map((data: any) => {
          return parseInt(data.unit_value) + parseInt(formValues[0]);
        });
      inputInventoryAction(
        id,
        parseInt(formValues[0]),
        parseInt(formValues[1]),
        formValues[2],
        formValues[3]
      );

      Toast.fire({
        icon: 'success',
        title: `Entran  ${formValues[0]}  ${product} para un total de ${unit_value}`
      });

      //MySwal.fire(`Entran  ${inputVal}  ${product} para un total de ${unit_value}`);
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inventoryListAction(
      category,
      provider,
      color,
      product,
      size,
      since,
      until,
      pageNext,
      20
    );
  };
  return (
    <Layout>
      <div className="row">
        <Search
          audit={false}
          itemSearch={search}
          itemClient={''}
          itemOutputSearch={''}
          itemProdcut={search_product}
          onChange={handleChange}
          onSubmit={handleOnSubmit}
          searchProduct={search_product}
          onChangeProduct={handleChangeProduct}
          onChangeInput={handleChangeInput}
          onChangeoutputType={''}
          selecteHidden={true}
          onDownloadExel={'inventory'}
        />
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-1">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Inventario</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <TableHead itemsHead={tableHead} />
                  <InventoryTable
                    items={datas}
                    onClick={(id: number) => handleClick(id)}
                  />
                </table>
              </div>
              <div className="d-flex flex-row-reverse">
                <div className="p-2">
                  <Stack spacing={1}>
                    <Pagination onChange={handleChangePage} count={page} size="small" />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.inventoryReducer.data,
  search: state.inventoryReducer.search,
  search_product: state.inventoryReducer.product
});

export default connect(mapStateToProps, {
  searchListAction,
  searchProcutAction,
  inventoryListAction,
  inputInventoryAction
})(Inventory);
