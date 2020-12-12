import React, {
  useState,
  useContext,
  componentDidMount,
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const logo = require('../../assets/images/bankomaclaricon900x900.png');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

  return (
    <View style={styles.mainView}>
      <View style={styles.logoView}>
        <Image style={styles.logo} source={logo} />
      </View>
      <TextInput
        placeholder='Email'
        style={styles.txtEmail}
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        placeholder='Password'
        secureTextEntry={true}
        style={styles.txtPassword}
        value={password}
        onChangeText={setPassword}
      ></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  txtEmail: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#7f8c8d',
    fontSize: 18,
    color: '#2c3e50',
  },
  txtPassword: {
    marginHorizontal: 20,
    marginTop: 15,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#7f8c8d',
    fontSize: 18,
    color: '#2c3e50',
  },
  btnLogin: {
    textAlign: 'center',
    backgroundColor: '#1abc9c',
    marginHorizontal: 20,
    marginTop: 15,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#16a085',
    fontSize: 18,
    color: '#ecf0f1',
  },
});

export default LoginScreen;
