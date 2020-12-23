import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Coupon from '../Coupons/components/Coupon';

const CouponDetailScreen = ({ navigation, coupon }) => {
  console.log(navigation);
  console.log(coupon);

  //    getParam fonksiyonu yok
  //    coupon u burda yakalayamadım

  //    const coupon = navigation.getParam('coupon');
  //    console.log(coupon);

  return (
    <View>
      <Text>asdasd</Text>
      <Text>asdasd</Text>
      <Text>asdasd</Text>
      <Text>asdasd</Text>
      <Text>asdasd</Text>
      <Text>asdasd</Text>
      {/* <Coupon coupon={coupon} /> */}
    </View>
  );
};

export default CouponDetailScreen;
