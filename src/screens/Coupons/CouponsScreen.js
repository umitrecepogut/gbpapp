import React, { useState, useContext, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { GetCoupons } from './api/getCoupons';
import CouponCardsList from './components/CouponCardsList';

const CouponsScreen = ({ navigation }) => {
  const [coupons, setCoupons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await GetCoupons();
      setCoupons(response);
    }
    fetchData();
  }, []);

  return (
    <ScrollView>
      <CouponCardsList navigation={navigation} coupons={coupons} />
    </ScrollView>
  );
};

export default CouponsScreen;
