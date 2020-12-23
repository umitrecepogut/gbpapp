import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GetCoupons } from './api/getCoupons';
import CouponCardsList from './components/CouponCardsList';
import Header from 'react-native-custom-header';

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
    <View>
      <ScrollView style={{ marginBottom: 60 }}>
        <CouponCardsList navigation={navigation} coupons={coupons} />
      </ScrollView>
    </View>
  );
};

export default CouponsScreen;
