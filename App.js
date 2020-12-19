import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import SignupScreen from './src/screens/Signup/index';

import AuthContextProvider from './src/context/authContext';
import {AuthContext} from './src/context//authContext';
import { ApplicationProvider }  from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Signup">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default App = () => {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <AuthContextProvider>
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>
        </AuthContextProvider>
      </ApplicationProvider>
    );
}
