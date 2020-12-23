import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Coupon from '../Coupons/components/Coupon';

const CouponDetailScreen = ({ navigation, coupon }) => {
  console.log(navigation);
  console.log(coupon);

  //    getParam fonksiyonu yok
  //    coupon u burda yakalayamadım
  //    https://bankomaclarapi.herokuapp.com/coupons/
  //    Yukarıdaki linke PUT ile
  //    {
  //      "couponId" : "5fe3a2485f82ba00245fbc63",
  //      "userId" : "5fde0345843d7300247ac427"
  //    }
  //    gönderirsen Coupon un favUsers'ına ekleme yapacak. Eğer favUsersta da kullanıcı varsa sarı göstercez o kullanıcıya

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
