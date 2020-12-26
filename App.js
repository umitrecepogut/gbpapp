import React, { useContext, useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import SignupScreen from './src/screens/Signup/index';
import CouponsScreen from './src/screens/Coupons/CouponsScreen';
import CouponDetailScreen from './src/screens/CouponDetail/CouponDetailScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';

import AuthContextProvider from './src/context/authContext';
import { AuthContext } from './src/context/authContext';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Stack = createStackNavigator();

const StackNavigator = () => {

  const { isLoggedIn } = useContext(AuthContext);

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

async function registerForPushNotificationsAsync() {
  let token;
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log(token);
  

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  console.log(token);
  return token;
}

export default App = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  useEffect(() => {

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthContextProvider>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
      </AuthContextProvider>
    </ApplicationProvider>
  );
};
