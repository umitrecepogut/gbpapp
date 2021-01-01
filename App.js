/*
Ümit Recep Öğüt
Nurettin Kerem Dokumacı
Hakan Ateşli
*/

import React, { useContext, useState, useEffect, useRef } from 'react';
import SignupScreen from './src/screens/Signup/index';
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CouponsScreen from './src/screens/Coupons/CouponsScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import CouponDetailScreen from './src/screens/CouponDetail/CouponDetailScreen';


import AuthContextProvider from './src/context/authContext';
import { AuthContext } from './src/context/authContext';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import AppContextProvider from './src/context/AppContext';
import {AppContext} from './src/context/AppContext';

const Stack = createStackNavigator();

const StackNavigator = () => {

  const { isLoggedIn } = useContext(AuthContext);
  const {setNotificationId} = useContext(AppContext);

  return (
    <Stack.Navigator initialRouteName={ isLoggedIn ? 'Home' : 'Login'}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          title: 'Giriş Yap',
          headerStyle: {
            backgroundColor: '#763626',
          },
          headerTintColor: '#ecf0f1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Ana Sayfa',
          headerStyle: {
            backgroundColor: '#763626',
          },
          headerTintColor: '#ecf0f1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{
          title: 'Kayıt Ol',
          headerStyle: {
            backgroundColor: '#763626',
          },
          headerTintColor: '#ecf0f1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='Coupons'
        component={CouponsScreen}
        options={{
          title: 'Kuponlar',
          headerStyle: {
            backgroundColor: '#763626',
          },
          headerTintColor: '#ecf0f1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='CouponDetail'
        component={CouponDetailScreen}
        options={{
          title: 'Kupon Detayları',
          headerStyle: {
            backgroundColor: '#763626',
          },
          headerTintColor: '#ecf0f1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profil',
          headerStyle: {
            backgroundColor: '#763626',
          },
          headerTintColor: '#ecf0f1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default App = () => {
  
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppContextProvider>
        <AuthContextProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </AuthContextProvider>
      </AppContextProvider>
    </ApplicationProvider>
  );
};
