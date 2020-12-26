import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Coupon from '../Coupons/components/Coupon';

const CouponDetailScreen = ({ route }) => {
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    setCoupon(route.params?.coupon);
  }, []);

  return <View>{!!coupon && <Coupon coupon={coupon} />}</View>;
};

export default CouponDetailScreen;
