/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { RegisterTypes } from './Actions'

export const initData = (state) => ({
  ...state,
  user: {},
  registerErrorMessage: null,
  avatar: null,
})

export const registerSuccess = (state) => ({
  ...state,
  registerSuccess: true,
  registerErrorMessage: null,
})

export const registerFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  registerErrorMessage: errorMessage,
})

export const registerImage = (state, { imageUri }) => ({
  ...state,
  avatar: imageUri,
})


/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  // [RegisterTypes.REGISTER]: register,
  [RegisterTypes.INIT_DATA]: initData,
  [RegisterTypes.REGISTER_FAILURE]: registerFailure,
  [RegisterTypes.REGISTER_SUCCESS]: registerSuccess,
  [RegisterTypes.REGISTER_IMAGE]: registerImage,
})
