import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { userService } from 'App/Services/UserService'

/**
 * A saga can contain multiple functions.
 */

export function* loginUser(action) {
  // Send informations to API
  const user = yield call(userService.loginUser, action.data)
  
  console.log(user)

  const test = yield call(userService.testLogin)
  
  console.log(test)

  

  
}
