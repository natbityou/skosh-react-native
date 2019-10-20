import { put, call, select } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import HomeActions from 'App/Stores/Home/Actions'
import { userService } from 'App/Services/UserService'
import { skoshService } from 'App/Services/SkoshService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 */

const getToken = (state) => state.login.token;

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

  // Load Homepage data
  const token = yield select(getToken);
  const skoshTypeResponse = yield call(skoshService.getSkoshTypes, token);

  if (!skoshTypeResponse) {
    // Error - Display Login Failed!
    return yield put(LoginActions.loginFailure('Unable to login')); 
  }
  
  // Load Succeeded! Populate state with Skosh Homepage data
  yield put(HomeActions.refreshPage(skoshTypeResponse.data));

  // Navigate to Home page
  NavigationService.navigate('Home');
}

