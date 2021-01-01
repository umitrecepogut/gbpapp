import axios from '../../../utils/axios/index';

const SignupAsync = async (username, password) => {
  try {
    await axios.post('user/signup', {
      email: username,
      password: password,
    });
    return true;
  } catch (err) {
    console.log('error', err);
    return false;
  }
};

export { SignupAsync };
