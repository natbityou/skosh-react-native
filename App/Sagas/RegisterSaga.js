import { put, call } from 'redux-saga/effects'
import RegisterActions from 'App/Stores/Register/Actions'
import { userService } from 'App/Services/UserService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 */

export function* registerUser(action) {
  // Send informations to API
  const user = yield call(userService.registerUser, action.data)
  console.log(user)

  if (!user) {
    return yield put(RegisterActions.registerFailure('Unable to register'))
  }

  yield put(RegisterActions.registerSuccess(user))
  NavigationService.navigate('Login')
}