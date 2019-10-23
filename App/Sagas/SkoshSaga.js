import { put, call, select } from 'redux-saga/effects'
import SkoshActions from 'App/Stores/Skosh/Actions'
import { skoshService } from 'App/Services/SkoshService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 */

const getToken = (state) => state.login.token;

export function* getSkoshAvatars(action) {
  const token = yield select(getToken);
  const skoshAvatarsResponse = yield call(skoshService.getSkoshAvatars, token, action.skoshTypeId);  

  if (skoshAvatarsResponse) {
    yield put(SkoshActions.viewSkoshSuccess(skoshAvatarsResponse.data))  
    
    if (action.skoshTypeId == 1) {
      NavigationService.navigate('Litter')
    } 
    else if (action.skoshTypeId == 2) {
      NavigationService.navigate('Coffee')
    } 
    else if (action.skoshTypeId == 3) {
      NavigationService.navigate('Donate')
    }
  } else {
      yield put(
          SkoshActions.viewSkoshFailure('Unable to view skosh avatars')
      )
  }
  }

export function* skoshSubmit(action) {
  // Send informations to API
  const token = yield select(getToken);
  const submitResponse = yield call(skoshService.skoshSubmit, token, action.data)
  
  console.log(submitResponse);

  if (submitResponse) {
    yield put(SkoshActions.skoshSuccess(submitResponse))
    NavigationService.goBack()
  } else {
    yield put(
      SkoshActions.skoshFailure('Unable to submit skosh')
    )
  }
}