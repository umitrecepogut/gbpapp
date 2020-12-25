import axios from '../../../utils/axios/index';
import * as SecureStore from 'expo-secure-store';

const LoginAsync = async (username, password) => {
  try {
    const result = await axios.post('user/login', {
      email: username,
      password: password,
    });
    if (!!result.data?.token) {
      await SecureStore.setItemAsync('token', result.data.token);
      await SecureStore.setItemAsync('userId', result.data.userId);
      await SecureStore.setItemAsync('email', username);
      const userObject = {
        token: result.data.token,
        email: username,
        userId: result.data.userId,
      };
      return userObject;
    }
    return true;
  } catch (err) {
    console.log('error', err);
    return false;
  }
};

export { LoginAsync };
