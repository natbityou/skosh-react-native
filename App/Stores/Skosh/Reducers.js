/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SkoshTypes } from './Actions'


export const skoshImage = (state, { imageUri }) => ({
  ...state,
  userSkoshPhoto: imageUri,
})


/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [SkoshTypes.SKOSH_IMAGE]: skoshImage,
})
