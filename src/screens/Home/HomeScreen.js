import React from 'react';
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
            right: 0,
            marginBottom: 160,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              flexDirection: 'row',
            }}
          >
            <View style={styles.loginLabelBox}>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.loginText}>
                  <Icon name='user-plus' size={35} color='#ffffff' />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginLabelBox}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>
                  <Icon name='sign-in' size={35} color='#ffffff' />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{}}>
            <View style={styles.loginLabelBox}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>
                  <Icon name='sign-out' size={35} color='#ffffff' />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.labelBox}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                onPress={() => navigation.navigate('Coupons')}
              >
                <Icon
                  style={{
                    flex: 1,
                    fontSize: 52,
                    color: '#ecf0f1',
                    fontWeight: 'bold',
                    textAlign: 'right',
                  }}
                  name='list-alt'
                  color='#ffffff'
                />
                <Text style={styles.homeText}>Kuponlar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subContainer}>
            <View style={styles.labelBox}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                onPress={() => navigation.navigate('Profile')}
              >
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
    margin: 2,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#2c3e50',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#34495ebb',
    marginVertical: 3,
    height: 50,
    padding: 5,
    width: 60,
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
    flex: 4,
    fontSize: 35,
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
  },
  iconText: {
    flex: 1,
    fontSize: 45,
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default HomeScreen;
