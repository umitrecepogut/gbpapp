import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Coupon from './Coupon';

const CouponsList = ({ coupons }) => {
  return !!coupons ? (
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
  ) : (
    <View>
      <Text>Kupon bulunamadı.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default CouponsList;
