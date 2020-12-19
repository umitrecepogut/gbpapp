import React, { useState, useEffect } from 'react';
import {SecureStore} from 'expo-secure-store';

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const userObject = {"token":"","email":""};

  const [user,setUser] = useState(undefined);

  const isLoggedIn = () => {
    return !!SecureStore.getItemAsync('token');
  }

  const authUser = () => {
    try 
    {
      const token = SecureStore.getItemAsync('token');
      const email = SecureStore.getItemAsync('email');
      userObject.token = token;
      userObject.email = email;

      setUser(userObject);
    } 
    catch (error) 
    {
      console.log(error);
    }
  };

  useEffect(()=>{
    authUser();
  },[user])

  const defaultContext = {
    isLoggedIn,
    user,
  };
  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;