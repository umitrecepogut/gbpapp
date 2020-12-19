import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MatchesList from './MatchesList';

const Coupon = ({ coupon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.couponName}>
        <Text style={styles.couponNameText}>{coupon.name}</Text>
      </View>
      <MatchesList matches={coupon.matches} />
      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}></View>
        <View style={styles.bottomRightSection}>
          <View style={styles.bottomRightSectionContainer}>
            <View style={styles.bottomRightTopSectionContainer}>
              <View style={styles.bottomRightTopLeftSectionContainer}>
                <Text style={styles.bottomRightTopLeftSectionContainerText}>
                  Toplam Oran
                </Text>
              </View>
              <View style={styles.bottomRightTopRightSectionContainer}>
                <Text style={styles.bottomRightTopRightSectionContainerText}>
                  {coupon.totalRate}
                </Text>
              </View>
            </View>
            <View style={styles.bottomRightBottomSectionContainer}>
              <Text style={styles.bottomRightBottomSectionContainerText}>
                {coupon.totalScore}
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
    margin: 5,
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    borderRadius: 5,
  },
  couponName: { margin: 5 },
  couponNameText: { margin: 5, color: '#ecf0f1' },
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
    backgroundColor: '#b2ddd4',
    borderStyle: 'solid',
    borderColor: '#34495e',
    borderWidth: 1,
    padding: 1,
    borderRadius: 10,
    margin: 2,
  },
  bottomRightTopSectionContainer: {
    flexDirection: 'row',
  },
  bottomRightTopLeftSectionContainer: {
    flex: 1,
    backgroundColor: '#65a09e',
    justifyContent: 'center',
    padding: 3,
    marginLeft: 5,
    marginTop: 5,
    borderTopLeftRadius: 5,
  },
  bottomRightTopLeftSectionContainerText: {
    textAlign: 'center',
    color: '#ecf0f1',
  },
  bottomRightTopRightSectionContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 3,
    marginRight: 5,
    marginTop: 5,
    borderTopRightRadius: 5,
  },
  bottomRightTopRightSectionContainerText: {
    textAlign: 'center',
    color: '#65a09e',
  },
  bottomRightBottomSectionContainer: {
    flex: 1,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    padding: 3,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  bottomRightBottomSectionContainerText: {
    textAlign: 'center',
    color: '#ecf0f1',
  },
});

export default Coupon;
