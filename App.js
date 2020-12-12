import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import AuthContextProvider from './src/context/authContext';
import { NavigationContainer } from '@react-navigation/native';

const navigator = createStackNavigator();
const stack = () => {
  <navigator.Navigator>
    <navigator.Screen name='Home' component={HomeScreen} />
    <navigator.Screen name='Login' component={LoginScreen} />
  </navigator.Navigator>;
};
//   {
//     Home: HomeScreen,
//     Login: LoginScreen,
//   },
//   {
//     initialRouteName: 'Login',
//     defaultNavigationOptions: {
//       title: 'Banko Maçlar',
//     },
//   }
// );

// export default createAppContainer(navigator);
export default class App extends React.Component {
  render() {
    return (
      <AuthContextProvider>
        <navigator></navigator>
      </AuthContextProvider>
    );
  }
}
