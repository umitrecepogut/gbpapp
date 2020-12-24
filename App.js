import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import SignupScreen from './src/screens/Signup/index';
import CouponsScreen from './src/screens/Coupons/CouponsScreen';
import CouponDetailScreen from './src/screens/CouponDetail/CouponDetailScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';

import AuthContextProvider from './src/context/authContext';
import { AuthContext } from './src/context//authContext';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);
  // {isLoggedIn() === false ? 'Login' : 'Home'}
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='Coupons' component={CouponsScreen} />
      <Stack.Screen name='CouponDetail' component={CouponDetailScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AuthContextProvider>
    </ApplicationProvider>
  );
};
