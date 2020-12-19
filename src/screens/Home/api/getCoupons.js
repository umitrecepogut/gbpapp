import axios from '../../../utils/axios/index';
import * as SecureStore from 'expo-secure-store';

const GetCoupons = async () => {
  try {
    const result = await axios.get('coupons');
    return result?.data;
  } catch (err) {
    console.log('error', err);
    return 'Hata';
  }
};

export { GetCoupons };
