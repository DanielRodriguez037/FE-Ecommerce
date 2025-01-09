import React, { FC } from 'react';
import { inventoryInterface } from '../../redux/interfaces/inventoryInterface';

interface inventoryListState {
  items: any;
  onClick(id: any): any;
}

const InventoryTable: FC<inventoryListState> = (props) => {
  const { items, onClick } = props;

  return (
    <tbody>
      {items && items !== null && items !== undefined && items.length !== 0 ? (
        items.map((item: inventoryInterface) => (
          <tr key={item.id}>
            <>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_category}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_provider}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_color}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_product}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_ref}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_size}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_measure}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_unit_value}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">$ {item.inv_amount}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">$ {item.inv_total}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.inv_create_at}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">
                    <button
                      className="btn bg-gradient-dark"
                      type="button"
                      onClick={() => onClick(item.id)}
                    >
                      <i className="material-icons text-sm">add</i>
                      <br />
                      Entarda
                    </button>
                  </p>
                </div>
              </td>
            </>
          </tr>
        ))
      ) : (
        <div className="bg-light text-center border-radius-lg py-4 mb-4">
          <p>No hay Auditorias disponibles.... </p>
        </div>
      )}
    </tbody>
  );
};

export default InventoryTable;
