import axios from '../../../utils/axios/index';

const GetCoupons = async () => {
  try {
    const result = await axios.get('coupons');
    return result?.data?.coupons;
  } catch (err) {
    console.log('error', err);
    return 'Hata';
  }
};

export { GetCoupons };
