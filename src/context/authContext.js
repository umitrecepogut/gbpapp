import React, { useState, useEffect } from 'react';
import { SecureStore } from 'expo-secure-store';

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const userObject = { token: '', email: '', userId: '' };

  const [user, setUser] = useState(undefined);
  const isLoggedIn = () => (!!SecureStore.getItemAsync('token') ? true : false);

  const userId = user?.userId;
  const email = user?.email;

  const authUser = () => {
    try {
      const token = SecureStore.getItemAsync('token');
      const email = SecureStore.getItemAsync('email');
      const id = SecureStore.getItemAsync('userId');
      userObject.token = token;
      userObject.email = email;
      userObject.userId = email;
      setUser(userObject);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authUser();
  }, [user]);

  const defaultContext = {
    isLoggedIn,
    user,
    email,
    userId,
    setUser,
  };
  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
