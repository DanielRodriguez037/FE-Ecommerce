import { FC } from 'react';

interface headtSatate {
  itemsHead: any;
}

const TableHead: FC<headtSatate> = (itemsHead) => {
  return (
    <thead>
      <tr>
        {itemsHead.itemsHead.map((item: string) => (
          <>
            <th
              key={item}
              className="text-uppercase  text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
            >
              <div className="d-flex px-2 py-1">
                <p className="text-xs   ml-1">{item}</p>
              </div>
            </th>
          </>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
