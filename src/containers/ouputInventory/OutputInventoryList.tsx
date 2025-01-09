import { Pagination, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import TableHead from '../../components/common/TableHead';
import OutputListTable from '../../components/ouputInventory/OutputListTable';
import Search from '../../components/common/Search';
import Layout from '../../hocs/Layout';
import {
  searchListAction,
  inventoryListAction,
  searchProcutAction
} from '../../redux/actions/inventoryAction';
import {
  outputListAction,
  outputProviderAction,
  searchOutputTypeAction,
  inputInventoryTypeAction
} from '../../redux/actions/outputActions';

const MySwal = withReactContent(Swal);

const tableHead: string[] = [
  'Salio a',
  'Tansformador',
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

interface outputListState {
  list: any;
  data: any;
  clients: any;
  search: any;
  result: any;
  search_product: any;
  searchListAction(): void;
  outputProviderAction(): void;
  searchProcutAction(product: string): void;
  inputInventoryTypeAction(id: number): void;
  searchOutputTypeAction(client_output: string): void;
  outputListAction(
    category: string,
    provider: string,
    product: string,
    color: string,
    size: string,
    client: string,
    output_type: string,
    until: string,
    since: string,
    pageNext: number
  ): void;
}

const OutputInventoryList: FC<outputListState> = (props) => {
  const {
    list,
    data,
    clients,
    search,
    result,
    search_product,
    outputListAction,
    searchListAction,
    outputProviderAction,
    inputInventoryTypeAction,
    searchOutputTypeAction,
    searchProcutAction
  } = props;

  const [formData, setFormData] = useState({
    category: null,
    provider: null,
    product: null,
    color: null,
    size: null,
    client: null,
    output_type: null,
    until: null,
    since: null,
    pageNext: null
  } as object);

  const [output_type, setOutputType] = useState('' as string);
  const [category, setCategory] = useState('' as string);

  const page = list.pages;
  const datas = list.data;

  useEffect(() => {
    if (result.data === true) {
      MySwal.fire({
        title: 'Bien hecho! ',
        icon: 'success',
        text: 'Acaba de ingresar el producto.'
      });
      result.data = false;
    }
    outputProviderAction();
    searchListAction();
    outputListAction(
      category,
      provider,
      product,
      color,
      size,
      client,
      output_type,
      until,
      since,
      pageNext
    );
  }, [outputListAction, outputProviderAction, output_type, result, searchListAction]);

  const { provider, product, color, size, client, until, since, pageNext }: any =
    formData;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChange = ({ value, name }: any) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    const pageNext = page;
    outputListAction(
      category,
      provider,
      product,
      color,
      size,
      client,
      output_type,
      until,
      since,
      pageNext
    );
  };

  const handleChangeProduct = ({ value }: any) => {
    searchProcutAction(value);
    if (!value) {
      setFormData({ inv_product: null });
    }

    setCategory(value);
  };

  const handleChangeoutputType = ({ value }: any) => {
    searchOutputTypeAction(value);
    setOutputType(value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    outputListAction(
      category,
      provider,
      product,
      color,
      size,
      client,
      output_type,
      until,
      since,
      pageNext
    );
  };
  const handleClick = (id: number) => {
    inputInventoryTypeAction(id);
  };

  return (
    <Layout>
      <div className="row">
        <Search
          audit={false}
          itemSearch={search}
          itemClient={clients}
          itemOutputSearch={data}
          itemProdcut={search_product}
          onChange={handleChange}
          onChangeInput={handleChangeInput}
          onSubmit={handleOnSubmit}
          searchProduct={search_product}
          onChangeProduct={handleChangeProduct}
          onChangeoutputType={handleChangeoutputType}
          selecteHidden={false}
          onDownloadExel={'outputs'}
        />
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-1">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Salidas</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <TableHead itemsHead={tableHead} />
                  <OutputListTable
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
  list: state.outputReducer.list,
  data: state.outputReducer.data,
  clients: state.outputReducer.client,
  search: state.inventoryReducer.search,
  search_product: state.inventoryReducer.product,
  result: state.outputReducer.result
});

export default connect(mapStateToProps, {
  inventoryListAction,
  outputListAction,
  searchListAction,
  searchOutputTypeAction,
  searchProcutAction,
  outputProviderAction,
  inputInventoryTypeAction
})(OutputInventoryList);
