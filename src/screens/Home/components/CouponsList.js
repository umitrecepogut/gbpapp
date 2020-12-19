import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Coupon from './Coupon';

const CouponsList = ({ coupons }) => {
  if (!coupons.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={coupons}
        keyExtractor={(coupon) => coupon._id}
        renderItem={({ item }) => {
          return <Coupon coupon={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default CouponsList;
