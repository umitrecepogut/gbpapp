import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Coupon from '../Coupons/components/Coupon';

const CouponDetailScreen = ({ route }) => {
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    setCoupon(route.params?.coupon);
  }, []);

  return (
    <ScrollView style={{}}>{!!coupon && <Coupon coupon={coupon} />}</ScrollView>
  );
};

export default CouponDetailScreen;
