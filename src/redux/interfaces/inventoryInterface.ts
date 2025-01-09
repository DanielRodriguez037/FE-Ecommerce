import {
  listActionType,
  searchListActionType,
  searchProductActionType,
  inputInventoryActionType
} from '../types/inventoryType';

export interface inventoryInterface {
  id: number;
  inv_category: string;
  inv_provider: string;
  inv_color: string;
  inv_ref_color: string;
  inv_product: string;
  inv_ref: string;
  inv_measure: string;
  inv_size: string;
  inv_amount: number;
  inv_unit_value: number;
  inv_total: number;
  inv_create_at: string;
  inv_update_at: string;
}

export interface inventoryFailInterface {
  message: string;
}

//---------------Inventory List---------------
interface listSuccessAction {
  type: listActionType.LIST_SUCCESS;
  payload: inventoryInterface | inventoryFailInterface;
}

interface listFailAction {
  type: listActionType.LIST_FAIL;
  payload: inventoryFailInterface;
}

export type listActionInterface = listSuccessAction | listFailAction;

//---------------Search List---------------
interface searchlistSuccessAction {
  type: searchListActionType.SEARCHLIST_SUCCESS;
  payload: inventoryInterface | inventoryFailInterface;
}

interface searchlistFailAction {
  type: searchListActionType.SEARCHLIST_FAIL;
  payload: inventoryFailInterface;
}

export type searchlistActionInterface = searchlistSuccessAction | searchlistFailAction;

//---------------Search List---------------
interface searchProductSuccessAction {
  type: searchProductActionType.SEARCH_PRODUCT_SUCCESS;
  payload: inventoryInterface | inventoryFailInterface;
}

interface searchProductFailAction {
  type: searchProductActionType.SEARCH_PRODUCT_FAIL;
  payload: inventoryFailInterface;
}

export type searchProductActionInterface =
  | searchProductSuccessAction
  | searchProductFailAction;

//-------------Input Inventory--------------
interface inputInventorySuccessAction {
  type: inputInventoryActionType.IMPUT_INVENTORY_SUCCESS;
  payload: inventoryInterface | inventoryFailInterface;
}

interface inputInventoryFailAction {
  type: inputInventoryActionType.IMPUT_INVENTORY_FAIL;
  payload: inventoryFailInterface;
}

export type inputInventoryActionInterface =
  | inputInventorySuccessAction
  | inputInventoryFailAction;
