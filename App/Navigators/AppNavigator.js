import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExampleScreen from 'App/Containers/Example/ExampleScreen';
import RegisterScreen from 'App/Containers/Register/RegisterScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import LoginScreen from 'App/Containers/Login/LoginScreen';
import HomeScreen from '../Containers/Home/HomeScreen';
import LitterScreen from '../Containers/Litter/LitterScreen';
import CoffeeScreen from '../Containers/Coffee/CoffeeScreen';
import DonateScreen from '../Containers/Donate/DonateScreen';



const AppStack = createStackNavigator({ Home: HomeScreen, Litter: LitterScreen, Coffee: CoffeeScreen, Donate: DonateScreen}) ;
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