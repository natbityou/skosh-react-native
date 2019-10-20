import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { userService } from 'App/Services/UserService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 */

export function* loginUser(action) {
  yield put(LoginActions.loginIsLoading());
  
  // Attempt to Login
  const loginResponse = yield call(userService.loginUser, action.data);

  if (!loginResponse) {
    // Login Failed!
    return yield put(LoginActions.loginFailure('Unable to login')); 
  }

  // Login Successed! Save User data and JWT to the store
  yield put(LoginActions.loginSuccess(loginResponse.data));

  // Navigate to Home page
  NavigationService.navigate('Home');
}

