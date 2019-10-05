import { put, call } from 'redux-saga/effects'
import RegisterActions from 'App/Stores/Register/Actions'
import { userService } from 'App/Services/UserService'

/**
 * A saga can contain multiple functions.
 */

export function* registerUser(action) {
  // Send informations to API
  const user = yield call(userService.registerUser, action.data)
  
  console.log(user)
}

