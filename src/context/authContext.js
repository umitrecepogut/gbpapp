import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const userObject = { token: '', email: '', userId: '' };

  const [user, setUser] = useState(undefined);
  const isLoggedIn = !!user?.token;

  const userId = user?.userId;
  const email = user?.email;

  const authUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const email = await AsyncStorage.getItem('email');
      const id =    await AsyncStorage.getItem('userId');
      userObject.token = token;
      userObject.email = email;
      userObject.userId = id;
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
