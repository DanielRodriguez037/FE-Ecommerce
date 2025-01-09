import {
  outputProviderActionType,
  outputClientActionType,
  outputSendActionType,
  outputListActionType,
  inputInventoryActionType
} from '../types/outputType';

export interface outputInterface {
  id: number;
  oi_category: string;
  oi_client: string;
  oi_provider: string;
  oi_output_type: string;
  oi_ref_color: string;
  oi_color: string;
  oi_product: string;
  oi_ref: string;
  oi_measure: string;
  oi_size: string;
  oi_amount: number;
  oi_unit_value: number;
  oi_total: number;
  oi_create_at: string;
  oi_update_at: string;
}

export interface outputFailInterface {
  message: string;
}
//---------------Output Povider List---------------
interface outputProviderSuccessAction {
  type: outputProviderActionType.OUTPUTPROVIDER_SUCCESS;
  payload: outputInterface | outputFailInterface;
}

interface outputProviderFailAction {
  type: outputProviderActionType.OUTPUTPROVIDER_FAIL;
  payload: outputFailInterface;
}

export type outputProviderActionInterface =
  | outputProviderSuccessAction
  | outputProviderFailAction;

//---------------Output Povider List---------------
interface outputClientSuccessAction {
  type: outputClientActionType.OUTPUTCLIENTE_SUCCESS;
  payload: outputInterface | outputFailInterface;
}

interface outputClientFailAction {
  type: outputClientActionType.OUTPUTCLIENTE_FAIL;
  payload: outputFailInterface;
}

export type outputClientActionInterface =
  | outputClientSuccessAction
  | outputClientFailAction;

//---------------Output Send---------------
interface outputSendSuccessAction {
  type: outputSendActionType.OUTPUTSEND_SUCCESS;
  payload: outputInterface | outputFailInterface;
}

interface outputSendFailAction {
  type: outputSendActionType.OUTPUTSEND_FAIL;
  payload: outputFailInterface;
}

export type outputSendActionInterface = outputSendSuccessAction | outputSendFailAction;

//---------------Output List---------------
interface outputListSuccessAction {
  type: outputListActionType.OUTPUTLIST_SUCCESS;
  payload: outputInterface | outputFailInterface;
}

interface outputListFailAction {
  type: outputListActionType.OUTPUTLIST_FAIL;
  payload: outputFailInterface;
}

export type outputListActionInterface = outputListSuccessAction | outputListFailAction;

//---------------Input  Inventory---------------
interface inputInventorySuccessAction {
  type: inputInventoryActionType.INPUTInventory_SUCCESS;
  payload: outputInterface | outputFailInterface;
}

interface inputInventoryFailAction {
  type: inputInventoryActionType.INPUTInventory_FAIL;
  payload: outputFailInterface;
}

export type inputInventoryActionInterface =
  | inputInventorySuccessAction
  | inputInventoryFailAction;
