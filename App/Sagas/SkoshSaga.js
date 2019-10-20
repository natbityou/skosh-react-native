import { put, call, select } from 'redux-saga/effects'
import SkoshActions from 'App/Stores/Skosh/Actions'
import { skoshService } from 'App/Services/SkoshService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 */

const getToken = (state) => state.login.token;

export function* skoshSubmit(action) {
  // Send informations to API
  const token = yield select(getToken);
  const submitResponse = yield call(skoshService.skoshSubmit, token, action.data)
  
  console.log(submitResponse);

  if (submitResponse) {
    yield put(SkoshActions.skoshSuccess(submitResponse))
    NavigationService.navigate('Litter')
  } else {
    yield put(
      SkoshActions.skoshFailure('Unable to submit skosh')
    )
  }
}