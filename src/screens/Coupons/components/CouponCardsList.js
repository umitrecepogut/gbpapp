import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import CouponCard from './CouponCard';

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
              onPress={() =>
                navigation.navigate('CouponDetail', { coupon: item })
              }
            >
              <CouponCard coupon={item} />
            </TouchableOpacity>
          );
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

export default CouponCardsList;
