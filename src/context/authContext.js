import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = React.createContext();

export default ({ children }) => {
  const authUser = {
    token: SecureStore.getItemAsync('token'),
    email: SecureStore.getItemAsync('email'),
  };

  const [user, setUser] = useState(authUser);
  useEffect(() => {
    let authUser = {
      token: SecureStore.getItemAsync('token'),
      email: SecureStore.getItemAsync('email'),
    };
    setUser(authUser);
  }, [user]);

  const getEmail = async () => {
    const email = await SecureStore.getItemAsync('email');
    return email;
  };
  const defaultContext = {
    getEmail,
  };
  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};
