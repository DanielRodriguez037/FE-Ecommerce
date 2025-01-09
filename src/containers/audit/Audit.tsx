import { Pagination, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  searchListAction,
  searchProcutAction
} from '../../redux/actions/inventoryAction';
import Search from '../../components/common/Search';
import AuditTable from '../../components/audit/AuditTable';
import TableHead from '../../components/common/TableHead';
import Layout from '../../hocs/Layout';
import { auditListAction } from '../../redux/actions/auditAction';
import {
  outputProviderAction,
  searchOutputTypeAction
} from '../../redux/actions/outputActions';

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
  'Descripcion',
  'Reposnsable'
];

interface auditListState {
  data: any;
  audit: any;
  search: any;
  clients: any;
  search_product: any;
  searchProcutAction(product: string): void;
  outputProviderAction(): void;
  searchOutputTypeAction(client_output: string): void;
  auditListAction(
    category: string,
    provider: string,
    product: string,
    color: string,
    size: string,
    client: string,
    output_type: string,
    create_by: string,
    until: string,
    since: string,
    pageNext: number
  ): void;
}

const Audit: FC<auditListState> = (props) => {
  const {
    data,
    search,
    auditListAction,
    audit,
    search_product,
    searchProcutAction,
    outputProviderAction,
    searchOutputTypeAction,
    clients
  } = props;

  const page = audit.pages;
  const datas = audit.data;
  const [output_type, setOutputType] = useState('' as string);
  const [category, setCategory] = useState('' as string);

  useEffect(() => {
    window.scrollTo();
    searchListAction();
    outputProviderAction();
    auditListAction(
      category,
      provider,
      product,
      color,
      size,
      client,
      output_type,
      create_by,
      until,
      since,
      pageNext
    );
  }, [auditListAction, outputProviderAction, output_type]);

  const [formData, setFormData] = useState({
    category: null,
    provider: null,
    product: null,
    color: null,
    size: null,
    client: null,
    output_type: null,
    create_by: null,
    until: null,
    since: null,
    pageNext: null
  } as object);

  const {
    provider,
    product,
    color,
    size,
    client,
    create_by,
    until,
    since,
    pageNext
  }: any = formData;

  const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    const pageNext = page;
    auditListAction(
      category,
      provider,
      product,
      color,
      size,
      client,
      output_type,
      create_by,
      until,
      since,
      pageNext
    );
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = ({ value, name }: any) => {
    setFormData({ ...formData, [name]: value });
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
    auditListAction(
      category,
      provider,
      product,
      color,
      size,
      client,
      output_type,
      create_by,
      until,
      since,
      pageNext
    );
  };
  return (
    <Layout>
      <div className="row">
        <Search
          onChangeInput={handleChangeInput}
          audit={true}
          itemSearch={search}
          itemClient={clients}
          itemOutputSearch={data}
          itemProdcut={search_product}
          onChange={handleChange}
          onSubmit={handleOnSubmit}
          searchProduct={search_product}
          onChangeProduct={handleChangeProduct}
          onChangeoutputType={handleChangeoutputType}
          selecteHidden={false}
          onDownloadExel={'audits'}
        />
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-1">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Auditorias</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <TableHead itemsHead={tableHead} />
                  <AuditTable items={datas} />
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
  audit: state.auditListReducer.data,
  data: state.outputReducer.data,
  clients: state.outputReducer.client,
  search: state.inventoryReducer.search,
  search_product: state.inventoryReducer.product,
  result: state.outputReducer.result
});

export default connect(mapStateToProps, {
  auditListAction,
  searchListAction,
  searchOutputTypeAction,
  outputProviderAction,
  searchProcutAction
})(Audit);
