import {
  authActionType,
  userLoadActionType,
  signupActionType,
  signinActionType,
  logoutActionType
} from '../types/authType';

export interface userInterface {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  re_password: string;
  user: string;
  rol: string;
  refresh: string;
  access: string;
}

export interface userFailInterface {
  message: string;
  refresh: string;
  access: string;
  user: string;
}

//---------------Auth Users---------------
interface authSuccessAtion {
  type: authActionType.AUTHENTICATED_SUCCESS;
  payload: userInterface | userFailInterface;
}

interface authErrorAtion {
  type: authActionType.AUTHENTICATED_FAIL;
  payload: userFailInterface;
}

export type authAtionInterface = authSuccessAtion | authErrorAtion;

//---------------Sign Up---------------
interface signupSuccessAtion {
  type: signupActionType.SIGNUP_SUCCESS;
  payload: userInterface | userFailInterface;
}

interface signupErrorAtion {
  type: signupActionType.SIGNUP_FAIL;
  payload: userFailInterface;
}

export type signupAtionInterface = signupSuccessAtion | signupErrorAtion;

//---------------Sign In---------------
interface signinSuccessAtion {
  type: signinActionType.SIGNIN_SUCCESS;
  payload: userInterface | userFailInterface;
}

interface signinErrorAtion {
  type: signinActionType.SIGNIN_FAIL;
  payload: userFailInterface;
}

export type signinAtionInterface = signinSuccessAtion | signinErrorAtion;

//---------------Load User---------------
interface userLoadSuccessAtion {
  type: userLoadActionType.USERLOAD_SUCCESS;
  payload: userInterface | userFailInterface;
}

interface userLoadErrorAtion {
  type: userLoadActionType.USERLOAD_FAIL;
  payload: userFailInterface;
}

export type userLoadAtionInterface = userLoadSuccessAtion | userLoadErrorAtion;

//---------------Load User---------------
interface logoutSuccessAtion {
  type: logoutActionType.LOGOUT_SUCCESS;
  payload: [];
}

interface logoutErrorAtion {
  type: logoutActionType.LOGOUT_FAIL;
  payload: userFailInterface;
}

export type logoutAtionInterface = logoutSuccessAtion | logoutErrorAtion;
