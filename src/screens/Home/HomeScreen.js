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
  }, [coupons]);
  console.log(coupons);

  return (
    <View>
      {!!coupons && (
        <ScrollView>
          <CouponsList coupons={coupons} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
