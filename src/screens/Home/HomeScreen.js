import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GetCoupons } from './api/getCoupons';
import CouponsList from './components/CouponsList';

const HomeScreen = () => {
  const [coupons, setCoupons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await GetCoupons();
      setCoupons(response);
    }
    fetchData();
  }, []);

  return (
    <ScrollView style={{ marginTop: 30 }}>
      <CouponsList coupons={coupons} />
    </ScrollView>
  );
};

export default HomeScreen;
