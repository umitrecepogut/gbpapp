import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Coupon from '../Coupons/components/Coupon';

const CouponDetailScreen = ({ route }) => {
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    setCoupon(route.params?.coupon);
  }, []);

  return <View>{!!coupon && <Coupon coupon={coupon} />}</View>;
};

export default CouponDetailScreen;
