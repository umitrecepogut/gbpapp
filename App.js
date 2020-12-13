import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import AuthContextProvider from './src/context/authContext';

const StackNavigator = createStackNavigator(  
  {
  Home: HomeScreen,
  Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Banko Maçlar',
    },
  }
);

const AppContainer = createAppContainer(StackNavigator);



// export default createAppContainer(navigator);
export default class App extends React.Component {
  render() {
    return (
      <AuthContextProvider>
        <AppContainer/>
      </AuthContextProvider>
    );
  }
}
