import { axios } from '../../../utils/axios/index';

const LoginAsync = async (username, password) => {
  await axios
    .post('user/login', { email: username, password: password })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
