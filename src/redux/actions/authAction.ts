import {
  authActionType,
  signupActionType,
  signinActionType,
  userLoadActionType,
  logoutActionType
} from '../types/authType';
import {
  authAtionInterface,
  signupAtionInterface,
  signinAtionInterface,
  userLoadAtionInterface,
  logoutAtionInterface,
  userInterface
} from '../interfaces/authInterface';
import { Dispatch } from 'react';
import axios from 'axios';

//---------------Auth Users---------------
export const authCheckAction = () => async (dispatch: Dispatch<authAtionInterface>) => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      token: localStorage.getItem('access')
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: authActionType.AUTHENTICATED_SUCCESS,
          payload: res.data
        });
      } else {
        dispatch({
          type: authActionType.AUTHENTICATED_FAIL,
          payload: res.data
        });
      }
    } catch (err: any) {
      dispatch({
        type: authActionType.AUTHENTICATED_FAIL,
        payload: err
      });
    }
  }
};

//---------------Sign Up----------------
export const signupAction =
  ({ first_name, last_name, email, password, re_password }: userInterface) =>
  async (dispatch: Dispatch<signupAtionInterface>) => {
    if (localStorage.getItem('access')) {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        re_password
      });
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/users/`,
          body,
          config
        );

        if (res.status === 200) {
          dispatch({
            type: signupActionType.SIGNUP_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: signupActionType.SIGNUP_FAIL,
            payload: res.data
          });
        }
      } catch (err: any) {
        dispatch({
          type: signupActionType.SIGNUP_FAIL,
          payload: err
        });
      }
    }
  };

//---------------User Load---------------
export const userLoadAction =
  () => async (dispatch: Dispatch<userLoadAtionInterface>) => {
    const config = {
      headers: {
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json'
      }
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,
        config
      );
      if (res.status === 200) {
        dispatch({
          type: userLoadActionType.USERLOAD_SUCCESS,
          payload: res.data
        });
      } else {
        dispatch({
          type: userLoadActionType.USERLOAD_FAIL,
          payload: res.data
        });
      }
    } catch (err: any) {
      dispatch({
        type: userLoadActionType.USERLOAD_FAIL,
        payload: err
      });
    }
  };

//---------------Sign In---------------
export const signinAction =
  (email: string, password: string) =>
  async (dispatch: Dispatch<signinAtionInterface>) => {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      email,
      password
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: signinActionType.SIGNIN_SUCCESS,
          payload: res.data
        });
      } else {
        dispatch({
          type: signinActionType.SIGNIN_FAIL,
          payload: res.data
        });
      }
    } catch (err: any) {
      dispatch({
        type: signinActionType.SIGNIN_FAIL,
        payload: err
      });
    }
  };

export const logout = () => (dispatch: Dispatch<logoutAtionInterface>) => {
  dispatch({
    type: logoutActionType.LOGOUT_SUCCESS,
    payload: []
  });
};
