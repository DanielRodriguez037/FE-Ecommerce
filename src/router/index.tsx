import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRouter from '../components/permissions/PrivateRouter';
import Signin from '../containers/auth/Signin';
import OutputInventory from '../containers/ouputInventory/OutputInventory';
import Inventory from '../containers/inventory/Inventory';
import Home from '../page/Home';
import OutputInventoryList from '../containers/ouputInventory/OutputInventoryList';
import Audit from '../containers/audit/Audit';

const index = createBrowserRouter([
  {
    path: '/',
    element: <Signin />
  },
  {
    path: '/home',
    element: <PrivateRouter access={Promise.resolve(true)} element={<Home />} />
  },
  {
    path: '/inventory/',
    element: <PrivateRouter access={Promise.resolve(true)} element={<Inventory />} />
  },
  {
    path: '/output_inventory/',
    element: (
      <PrivateRouter access={Promise.resolve(true)} element={<OutputInventory />} />
    )
  },
  {
    path: '/output_inventory_List/',
    element: (
      <PrivateRouter access={Promise.resolve(true)} element={<OutputInventoryList />} />
    )
  },
  {
    path: '/audit',
    element: <PrivateRouter access={Promise.resolve(true)} element={<Audit />} />
  }
]);
export default index;
 