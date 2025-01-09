import { auditListActionType } from '../types/auditType';
import { auditListActionInterface } from '../interfaces/auditInterface';

import { Dispatch } from 'react';
import axios from 'axios';

export const auditListAction =
  (
    aud_category: string,
    aud_provider: string,
    aud_product: string,
    aud_color: string,
    aud_size: string,
    aud_client: string,
    aud_output_type: string,
    aud_create_by: string,
    aud_until: string,
    aud_since: string,
    pageNext: number
  ) =>
  async (dispatch: Dispatch<auditListActionInterface>) => {
    if (localStorage.getItem('access')) {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };

      const body = {
        aud_category,
        aud_provider,
        aud_product,
        aud_color,
        aud_size,
        aud_client,
        aud_output_type,
        aud_create_by,
        aud_until,
        aud_since,
        pageNext
      };
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/audits/`,
          body,
          config
        );
        if (res.status === 200) {
          dispatch({
            type: auditListActionType.AUDITLIST_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: auditListActionType.AUDITLIST_FAIL,
            payload: res.data.data
          });
        }
      } catch (error: any) {
        dispatch({
          type: auditListActionType.AUDITLIST_FAIL,
          payload: error
        });
      }
    }
  };
