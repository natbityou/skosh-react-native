import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleScreen from 'App/Containers/Example/ExampleScreen';
import RegisterScreen from 'App/Containers/Register/RegisterScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import LoginScreen from 'App/Containers/Login/LoginScreen';
import HomeScreen from '../Containers/Home/HomeScreen';
import DetailsScreen from '../Containers/Details/DetailsScreen';



const AppStack = createStackNavigator({ Home: HomeScreen, Details: DetailsScreen }) ;
const AuthStack = createStackNavigator({ Login: LoginScreen, Register: RegisterScreen} , { mode: 'modal', headerMode: 'none',} );

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: SplashScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'SplashScreen',
    }
  )
);