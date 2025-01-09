import { FC } from 'react';
import { outputInterface } from '../../redux/interfaces/outputInterface';
interface OutputListTableState {
  items: any;
  onClick(id: any): any;
}

const OutputListTable: FC<OutputListTableState> = (props) => {
  const { items, onClick } = props;
  return (
    <tbody>
      {items &&
        items !== null &&
        items !== undefined &&
        items.length !== 0 &&
        items.map((item: outputInterface) => (
          <tr key={item.id}>
            <>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_output_type}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_client}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_category}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_provider}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_color}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_product}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_ref}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_size}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_measure}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_unit_value}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">$ {item.oi_amount}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">$ {item.oi_total}</p>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <p className="text-xs font-weight-bold  ml-1">{item.oi_create_at}</p>
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
        ))}
    </tbody>
  );
};

export default OutputListTable;
