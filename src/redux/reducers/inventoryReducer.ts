import {
  listActionType,
  searchListActionType,
  searchProductActionType,
  inputInventoryActionType
} from '../types/inventoryType';
import {
  listActionInterface,
  searchlistActionInterface,
  searchProductActionInterface,
  inputInventoryActionInterface
} from '../interfaces/inventoryInterface';

interface inventoryState {
  page: number;
  data: object;
  search: object;
  product: object;
  result: boolean;
}

const initialState: inventoryState = {
  page: 0,
  data: [],
  search: [],
  product: [],
  result: false
};

const inventoryReducer = (
  state: inventoryState = initialState,
  action:
    | listActionInterface
    | searchlistActionInterface
    | searchProductActionInterface
    | inputInventoryActionInterface
): inventoryState => {
  const { type, payload } = action;

  switch (type) {
    case listActionType.LIST_SUCCESS:
      return {
        ...state,
        data: payload
      };
    case searchListActionType.SEARCHLIST_SUCCESS:
      return {
        ...state,
        search: payload
      };
    case searchProductActionType.SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload
      };
    case inputInventoryActionType.IMPUT_INVENTORY_SUCCESS:
      return {
        ...state,
        data: payload,
        result: true
      };
    case inputInventoryActionType.IMPUT_INVENTORY_FAIL:
      return {
        ...state,
        product: payload
      };
    case searchListActionType.SEARCHLIST_FAIL:
      return {
        ...state,
        data: payload
      };
    case listActionType.LIST_FAIL:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};

export default inventoryReducer;
