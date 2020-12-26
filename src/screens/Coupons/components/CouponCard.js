import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { round } from 'mathjs';

const CouponCard = ({ coupon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <View style={styles.couponName}>
            <Text style={styles.couponNameText}>{coupon.name}</Text>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <View style={styles.bottomRightSectionContainer}>
            <View style={styles.bottomRightTopSectionContainer}>
              <View style={styles.bottomRightTopSectionContainer}>
                <Text style={styles.bottomRightTopSectionContainerText}>
                  Toplam Oran
                </Text>
              </View>
            </View>
            <View style={styles.bottomRightBottomSectionContainer}>
              <Text style={styles.bottomRightBottomSectionContainerText}>
                {round(coupon.totalRate, 2)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <View style={styles.bottomRightSectionContainer}>
            <View style={styles.bottomRightTopSectionContainer}>
              <View style={styles.bottomRightTopSectionContainer}>
                <Text style={styles.bottomRightTopSectionContainerText}>
                  Güven
                </Text>
              </View>
            </View>
            <View style={styles.bottomRightBottomSectionContainer}>
              <Text style={styles.bottomRightBottomSectionContainerText}>
                %{round(coupon.totalScore, 2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    padding: 3,
    backgroundColor: '#336b87',
    color: '#ecf0f1',
    borderRadius: 8,
  },
  couponName: { margin: 5, justifyContent: 'center', flex: 1 },
  couponNameText: {
    margin: 5,
    color: '#ecf0f1',
    textAlign: 'left',
  },
  bottomSection: {
    flexDirection: 'row',
  },
  bottomLeftSection: {
    flex: 3,
  },
  bottomRightSection: {
    flex: 2,
  },
  bottomRightSectionContainer: {
    backgroundColor: '#1e434c',
    borderStyle: 'solid',
    borderColor: '#34495e',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 2,
    marginLeft: 1,
  },
  bottomRightTopSectionContainer: {
    flex: 1,
    backgroundColor: '#763626',
    justifyContent: 'center',
    padding: 3,
    marginRight: 2,
    marginTop: 2,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  bottomRightTopSectionContainerText: {
    textAlign: 'center',
    color: '#ecf0f1',
  },
  bottomRightBottomSectionContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 3,
    marginRight: 2,
    marginBottom: 2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  bottomRightBottomSectionContainerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#34495e',
  },
});

export default CouponCard;
