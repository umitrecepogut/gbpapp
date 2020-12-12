import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const authContext = React.createContext();

export default ({ children }) => {
  const authUser = {
    token: SecureStore.getItemAsync('token'),
    email: SecureStore.getItemAsync('email'),
  };
  const [user, setUser] = useState(authUser);
  useEffect(() => {
    SecureStore.setItemAsync('token', authUser.token);
    SecureStore.setItemAsync('email', authUser.email);
  }, [authUser]);
  const getEmail = async () => {
    return await SecureStore.getItemAsync('email');
  };
  const defaultContext = {
    getEmail,
  };
  return (
    <authContext.Provider value={defaultContext}>
      {children}
    </authContext.Provider>
  );
};
