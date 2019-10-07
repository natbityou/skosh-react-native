/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LoginTypes } from './Actions'

export const initData = (state) => ({
  ...state,
  user: {},
  loginIsLoading: false,
  loginErrorMessage: null,
})

export const loginIsLoading = (state) => ({
  ...state,
  loginIsLoading: true,
  loginErrorMessage: null,
})

export const loginSuccess = (state, { user }) => ({
  ...state,
  user: user,
  loginErrorMessage: null,
})

export const loginFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  loginIsLoading: false,
  loginErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.INIT_DATA]: initData,
  [LoginTypes.LOGIN_IS_LOADING]: loginIsLoading,
  [LoginTypes.LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.LOGIN_FAILURE]: loginFailure,
})
