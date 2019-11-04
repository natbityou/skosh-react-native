import { put, call, select } from 'redux-saga/effects'
import SkoshActions from 'App/Stores/Skosh/Actions'
import { skoshService } from 'App/Services/SkoshService'
import  HomeActions from 'App/Stores/Home/Actions'
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
  } else {console.log("not working");
      yield put(
          SkoshActions.viewSkoshFailure('Unable to view skosh avatars')
      )
  }
  }

export function* skoshSubmit(action) {
  // Send informations to API
  const token = yield select(getToken);
  console.log("pre-call");
  const submitResponse = yield call(skoshService.skoshSubmit, token, action.data)
  const skoshTypeResponse = yield call(skoshService.getSkoshTypes, token);

  console.log(submitResponse);
  console.log("bye");


  if (!submitResponse) {
    return put(SkoshActions.skoshFailure('Unable to submit skosh'));
  }
    
  yield put(SkoshActions.skoshSuccess(submitResponse))
  // Load Succeeded! Populate state with Skosh Homepage data
  yield put(HomeActions.refreshPage(skoshTypeResponse.data));
  NavigationService.navigate('Home')
}

export function* getSkoshProfile(action) {
  const token = yield select(getToken);
  const skoshProfileResponse = yield call(skoshService.getSkoshProfile, token, action.userId);  
  
  if (skoshProfileResponse) {
    console.log(skoshProfileResponse),
    yield put(SkoshActions.skoshProfileSuccess(skoshProfileResponse.data)) 

    NavigationService.navigate('Profile')
  } else {
      yield put(
          SkoshActions.skoshProfileFailure('Unable to view skosh profile')
      )
  }
}

export function* getProfileAvatar(action) {
  const token = yield select(getToken);
  const profileAvatarResponse = yield call(skoshService.getProfileAvatar, token, action.profileAvatar);  
  
  if (profileAvatarResponse) {
    console.log(profileAvatarResponse),
    yield put(SkoshActions.profileAvatarSuccess(profileAvatarResponse.data)) 
  } else {
      yield put(
          SkoshActions.profileAvatarFailure('Unable to view profile avatars')
      )
  }
}



