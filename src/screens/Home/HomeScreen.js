import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const bgImage = require('../../../assets/images/soccer_field_stadium-wallpaper-480x854.png');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <View
          style={{
            top: 0,
            width: 70,
            right: 0,
            marginBottom: 150,
            alignSelf: 'flex-end',
          }}
        >
          <View style={styles.loginContainer}>
            <View style={styles.loginLabelBox}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>
                  <Icon name='sign-in' size={33} color='#ffffff' />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.labelBox}>
              <TouchableOpacity onPress={() => navigation.navigate('Coupons')}>
                <Icon style={styles.iconText} name='list-alt' color='#ffffff' />
                <Text style={styles.homeText}>Kuponlar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subContainer}>
            <View style={styles.labelBox}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Icon style={styles.iconText} name='id-card' color='#ffffff' />
                <Text style={styles.homeText}>Profil</Text>
              </TouchableOpacity>
            </View>
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
  loginContainer: { flexDirection: 'row' },
  loginLabelBox: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignContent: 'flex-start',
    borderStyle: 'solid',
    borderColor: '#2c3e50',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#34495ebb',
    marginVertical: 3,
    height: 50,
    padding: 3,
  },
  loginText: {
    fontSize: 20,
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
  iconText: {
    fontSize: 45,
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
