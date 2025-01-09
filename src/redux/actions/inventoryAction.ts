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
import { Dispatch } from 'react';
import axios from 'axios';

export const inventoryListAction =
  (
    inv_category: string,
    inv_provider: string,
    inv_color: string,
    inv_product: string,
    inv_size: string,
    inv_since: string,
    inv_until: string,
    pageNext: number,
    pageLimit: number
  ) =>
  async (dispatch: Dispatch<listActionInterface>) => {
    if (localStorage.getItem('access')) {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };
      const body = {
        inv_size,
        inv_product,
        inv_color,
        inv_category,
        inv_provider,
        inv_since,
        inv_until,
        pageNext,
        pageLimit
      };

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/inventory/`,
          body,
          config
        );
        if (res.status === 200) {
          dispatch({
            type: listActionType.LIST_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: listActionType.LIST_FAIL,
            payload: res.data.data
          });
        }
      } catch (error: any) {
        dispatch({
          type: listActionType.LIST_FAIL,
          payload: error
        });
      }
    }
  };

export const searchListAction =
  () => async (dispatch: Dispatch<searchlistActionInterface>) => {
    if (localStorage.getItem('access')) {
      const config: object = {
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/inventory/search/`,
          config
        );

        if (res.status === 200) {
          dispatch({
            type: searchListActionType.SEARCHLIST_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: searchListActionType.SEARCHLIST_FAIL,
            payload: res.data
          });
        }
      } catch (error: any) {
        dispatch({
          type: searchListActionType.SEARCHLIST_FAIL,
          payload: error
        });
      }
    }
  };

export const searchProcutAction =
  (category_id: string) => async (dispatch: Dispatch<searchProductActionInterface>) => {
    if (localStorage.getItem('access')) {
      const config: object = {
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };
      const body = {
        category_id
      };

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/inventory/search/`,
          body,
          config
        );

        if (res.status === 200) {
          dispatch({
            type: searchProductActionType.SEARCH_PRODUCT_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: searchProductActionType.SEARCH_PRODUCT_FAIL,
            payload: res.data
          });
        }
      } catch (error: any) {
        dispatch({
          type: searchProductActionType.SEARCH_PRODUCT_FAIL,
          payload: error
        });
      }
    }
  };

//---------------Input Inventory--------------
export const inputInventoryAction =
  (
    id: number,
    inv_unit_value: number,
    inv_amount: number,
    invoice: string,
    provider: string
  ) =>
  async (dispatch: Dispatch<inputInventoryActionInterface>) => {
    if (localStorage.getItem('access')) {
      const config: object = {
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };
      const aud_create = JSON.parse(localStorage.getItem('users') || '[]');
      const aud_create_by = `${aud_create[0].first_name} ${aud_create[0].last_name}`;
      const body = {
        id,
        inv_unit_value,
        inv_amount,
        invoice,
        provider,
        aud_create_by
      };

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/inventory/input/`,
          body,
          config
        );

        if (res.status === 200) {
          dispatch({
            type: inputInventoryActionType.IMPUT_INVENTORY_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: inputInventoryActionType.IMPUT_INVENTORY_FAIL,
            payload: res.data
          });
        }
      } catch (error: any) {
        dispatch({
          type: inputInventoryActionType.IMPUT_INVENTORY_FAIL,
          payload: error
        });
      }
    }
  };
