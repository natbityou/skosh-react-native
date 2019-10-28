import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { RegisterTypes } from 'App/Stores/Register/Actions'
import { LoginTypes } from 'App/Stores/Login/Actions'
import { SkoshTypes } from 'App/Stores/Skosh/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { registerUser } from './RegisterSaga'
import { loginUser } from './LoginSaga'
import { skoshSubmit } from './SkoshSaga'
import { getSkoshAvatars } from './SkoshSaga'
import { getSkoshProfile } from './SkoshSaga'
import { getProfileAvatar } from './SkoshSaga'





export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    // Call 'registerUser()' when a 'Register' action is triggered
    takeLatest(RegisterTypes.REGISTER, registerUser),
    // Call 'loginUser()' when a 'Register' action is triggered
    takeLatest(LoginTypes.LOGIN, loginUser),
    // Call 'loginUser()' when a 'SKOSH_SUBMIT' action is triggered
    takeLatest(SkoshTypes.SKOSH_SUBMIT, skoshSubmit),
     // Call 'skoshAvatars()' when a 'VIEW_SKOSH' action is triggered
    takeLatest(SkoshTypes.VIEW_SKOSH, getSkoshAvatars),
    // Call 'skoshProfile()' when a 'SKOSH_PROFILE' action is triggered
    takeLatest(SkoshTypes.SKOSH_PROFILE, getSkoshProfile),
  ])
}
