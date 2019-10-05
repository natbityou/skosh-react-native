import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleScreen from 'App/Containers/Example/ExampleScreen';
import RegisterScreen from 'App/Containers/Register/RegisterScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';


// const AppStack = createStackNavigator({ });
const AuthStack = createStackNavigator({ Register: RegisterScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: SplashScreen,
      Auth: AuthStack,
      // App: AppStack
    },
    {
      initialRouteName: 'SplashScreen',
    }
  )
);