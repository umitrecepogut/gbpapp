import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import CouponCard from './CouponCard';
import axios from '../../../utils/axios/index';

const CouponCardsList = ({ coupons, navigation }) => {
  return !!coupons ? (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={coupons}
        keyExtractor={(coupon) => coupon._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                axios.get(`/coupons/${item._id}`).then((response) => {
                  navigation.navigate('CouponDetail', {
                    coupon: response.data,
                  });
                });
              }}
            >
              <CouponCard coupon={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  ) : (
    <View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default CouponCardsList;
