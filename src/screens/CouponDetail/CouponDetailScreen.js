import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Coupon from '../Coupons/components/Coupon';

const CouponDetailScreen = ({ route }) => {
  const [coupon,setCoupon] = useState(null);

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
  
  useEffect(() => {
    setCoupon(route.params?.coupon);
  },[])

  return (
    <View>
      {!!coupon && (
        <Coupon coupon={coupon} />
      )}
    </View>
  );
};

export default CouponDetailScreen;
