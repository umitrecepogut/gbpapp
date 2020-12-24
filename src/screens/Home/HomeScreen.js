import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Header from 'react-native-custom-header';

const bgImage = require('../../../assets/images/soccer_field_stadium-wallpaper-480x854.png');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <View style={styles.subContainer}>
          <View style={styles.labelBox}>
            <TouchableOpacity onPress={() => navigation.navigate('Coupons')}>
              <Text style={styles.homeText}>Kuponlar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.labelBox}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.homeText}>Profil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.labelBox}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.homeText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  subContainer: { flexDirection: 'row' },
  labelBox: {
    flex: 1,
    margin: 6,
    justifyContent: 'center',
    alignContent: 'flex-start',
    borderStyle: 'solid',
    borderColor: '#2c3e50',
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: '#34495ebb',
    marginVertical: 6,
    height: 100,
    padding: 6,
  },
  homeText: {
    fontSize: 25,
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
