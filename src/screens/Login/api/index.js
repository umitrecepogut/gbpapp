import axios from '../../../utils/axios/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginAsync = async (username, password) => {
  try {
    const result = await axios.post('user/login', {
      email: username,
      password: password,
    });
    if (!!result.data?.token) {
      await AsyncStorage.setItem('token', result.data.token);
      await AsyncStorage.setItem('userId', result.data.userId);
      await AsyncStorage.setItem('email', username);
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
