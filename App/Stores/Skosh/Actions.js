import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Example/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  // Init data
  initData: null,
  // Submit skosh
  skoshSubmit: ['data'],
  // skosh Image
  skoshImage: ['imageUri'],
  // skoshes were successfully submitted
  skoshSuccess: null,
  // An error occurred
  skoshFailure: ['errorMessage'],
  // view skoshes
  viewSkosh: ['skoshTypeId'],
  // skoshes were successfully submitted
  viewSkoshSuccess: ['skoshAvatars'],
  // An error occurred
  viewSkoshFailure: ['errorMessage'],
  // get user skoshes
  skoshProfile: ['userId'],
  // save user skosh data
  skoshProfileSuccess: ['userSkoshes'],
  // An error occurred getting user skoshes
  skoshProfileFailure: ['errorMessage'],
  // set user data for profile page
  setProfileData: ['user'],
  //set user skosh type for upload page
  uploadSkoshType:['uploadType'],
})

export const SkoshTypes = Types
export default Creators
