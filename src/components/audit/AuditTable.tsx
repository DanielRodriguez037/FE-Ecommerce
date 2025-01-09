import React, { FC } from 'react';
import { auditListInterface } from '../../redux/interfaces/auditInterface';
interface AuditListState {
  items: any;
}

const AuditTable: FC<AuditListState> = (props) => {
  const { items } = props;
  return (
    <tbody>
      {items && items !== null && items !== undefined && items.length !== 0 ? (
        items.map((item: auditListInterface) => (
          <tr key={item.id}>
            <>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_category}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_provider}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_color}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_product}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_ref}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_size}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_measure}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_unit_value}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">$ {item.aud_amount}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">$ {item.aud_total}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_create_at}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_description}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.aud_create_by}</p>
                </div>
              </td>
            </>
          </tr>
        ))
      ) : (
        <p className=" text-center">No hay Auditorias disponibles.... </p>
      )}
    </tbody>
  );
};

export default AuditTable;
