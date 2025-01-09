import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Layout from '../../hocs/Layout';
import OutputAdd from '../../components/ouputInventory/OutputAdd';
import { inventoryListAction } from '../../redux/actions/inventoryAction';
import OutputAddList from '../../components/ouputInventory/OutputAddList';
import {
  outputProviderAction,
  searchOutputTypeAction,
  sendOutputTypeAction
} from '../../redux/actions/outputActions';

const MySwal = withReactContent(Swal);
interface outputInventoryState {
  data: any;
  client: any;
  result: any;
  dataInventory: any;
  outputProviderAction(): void;
  inventoryListAction(
    inv_category: string,
    inv_provider: string,
    inv_color: string,
    inv_product: string,
    inv_size: string,
    inv_since: string,
    inv_until: string,
    pageNext: number,
    pageLimit: number
  ): void;
  searchOutputTypeAction(client_output: string): void;
  sendOutputTypeAction(client_output: any): void;
}

interface InventoryData {
  inv_order: string;
  inv_invetary: number;
  inv_client: number;
  inv_cout: number;
}

const OutputInventoryt: FC<outputInventoryState> = (props) => {
  const {
    data,
    client,
    result,
    dataInventory,
    outputProviderAction,
    inventoryListAction,
    searchOutputTypeAction,
    sendOutputTypeAction
  } = props;

  const [formData, setFormData] = useState({
    inv_invetary: 0,
    inv_client: 0
  } as InventoryData);

  const [formDataInput, setFormDataInput] = useState({
    inv_order: '',
    inv_cout: 0
  } as InventoryData);

  const { inv_invetary, inv_client }: InventoryData = formData;
  const { inv_cout, inv_order }: InventoryData = formDataInput;

  const [inv_category, setCategory] = useState('' as string);
  const [inv_output_type, setOutputType] = useState('' as string);
  const [itemOutputAdd, setItemOutputAdd] = useState();

  useEffect(() => {
    outputProviderAction();
    if (result.data === true) {
      MySwal.fire({
        title: 'Bien hecho ',
        icon: 'success',
        text: 'Los productos del inventario estan listos para que salgan'
      });
      result.data = null;
      localStorage.removeItem('inventoryOutput');
      setCategory('');
      setOutputType('');

      setItemOutputAdd(JSON.parse(localStorage.getItem('inventoryOutput') || '[]'));
    }
  }, [outputProviderAction, result]);

  const handleChange = ({ value, name }: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormDataInput({ ...formDataInput, [e.target.name]: e.target.value });
  };

  const handleChangeProduct = ({ value }: any) => {
    inventoryListAction(value, '', '', '', '', '', '', 0, 10000);
    setCategory(value);
  };

  const handleChangeoutputType = ({ value }: any) => {
    searchOutputTypeAction(value);
    setOutputType(value);
  };

  const handleDeleteClick = (id: string) => {
    const deleteOutpuy = JSON.parse(localStorage.getItem('inventoryOutput') || '[]');

    const inventoryOutput = deleteOutpuy.filter((data: any) => {
      return data.id.toString() !== id;
    });

    localStorage.setItem('inventoryOutput', JSON.stringify(inventoryOutput));
    setItemOutputAdd(JSON.parse(localStorage.getItem('inventoryOutput') || '[]'));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const invcategory = data.category.filter((data: any) => {
      return data.id === inv_category;
    });
    const invoutputtype = data.outputType.filter((data: any) => {
      return data.id === inv_output_type;
    });

    const invinvetary = dataInventory.data.filter((data: any) => {
      return data.id === inv_invetary;
    });

    const invclient = client.clientOutput.filter((data: any) => {
      return data.id === inv_client;
    });

    const unitvalue = parseInt(invinvetary[0].inv_unit_value);
    const val = unitvalue - inv_cout;
    if (val < 0) {
      MySwal.fire({
        title: 'Error en los productos',
        icon: 'warning',
        text: `Este producto solo tiene ${invinvetary[0].inv_unit_value}`
      });
      result.data = null;
    } else {
      const inventoryOutput = {
        id:
          invcategory[0].id.toString() +
          invoutputtype[0].id.toString() +
          invinvetary[0].id.toString() +
          invclient[0].id.toString(),
        inv_output_type_id: invoutputtype[0].id,
        inv_invetary_id: invinvetary[0].id,
        inv_client_id: invclient[0].id,
        inv_output_type_ot_name: invoutputtype[0].ot_name,
        inv_invetary_inv_product: invinvetary[0].inv_product,
        inv_invetary_inv_category: invinvetary[0].inv_category,
        inv_invetary_inv_ref: invinvetary[0].inv_ref,
        inv_invetary_inv_provider: invinvetary[0].inv_provider,
        inv_invetary_inv_measure: invinvetary[0].inv_measure,
        inv_invetary_inv_color: invinvetary[0].inv_color,
        inv_invetary_inv_size: invinvetary[0].inv_size,
        inv_client_ci_name: invclient[0].ci_name,
        inv_cout: inv_cout,
        inv_order: inv_order
      };

      const inventoryArr = localStorage.getItem('inventoryOutput') || '[]';
      localStorage.setItem(
        'inventoryOutput',
        JSON.stringify([inventoryOutput, ...JSON.parse(inventoryArr)])
      );

      setItemOutputAdd(JSON.parse(localStorage.getItem('inventoryOutput') || '[]'));
    }
  };

  const handleSendOnSubmit = () => {
    const outputInventory = JSON.parse(localStorage.getItem('inventoryOutput') || '[]');
    sendOutputTypeAction(outputInventory);
  };

  return (
    <Layout>
      <OutputAdd
        itemOutput={data}
        itemClient={client}
        searchProduct={dataInventory}
        itemOutputAdd={itemOutputAdd}
        onChange={handleChange}
        onChangeInput={handleChangeInput}
        onSubmit={handleOnSubmit}
        onChangeoutputType={handleChangeoutputType}
        onChangeProduct={handleChangeProduct}
      />
      <OutputAddList
        itemOutputAdd={itemOutputAdd}
        onClick={(id: string) => handleDeleteClick(id)}
        onSubmit={handleSendOnSubmit}
      />
    </Layout>
  );
};
const mapStateToProps = (state: any) => ({
  data: state.outputReducer.data,
  client: state.outputReducer.client,
  dataInventory: state.inventoryReducer.data,
  result: state.outputReducer.result
});

export default connect(mapStateToProps, {
  inventoryListAction,
  outputProviderAction,
  searchOutputTypeAction,
  sendOutputTypeAction
})(OutputInventoryt);
