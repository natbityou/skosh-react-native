import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { userService } from 'App/Services/UserService'
import NavigationService from 'App/Services/NavigationService'


/**
 * A saga can contain multiple functions.
 */

export function* loginUser(action) {
  // Send informations to API
  const data = yield call(userService.loginUser, action.data)
  console.log(data)

  if (data) {
    yield put(LoginActions.loginSuccess(data.user)) 
    NavigationService.navigate('Home')
  } else {
    yield put(
      LoginActions.loginFailure('There was an error while fetching user informations.')
    )
  } 
}

