import React, {
  useState,
  useContext,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LoginAsync } from './api/index';

import {AuthContext} from '../../context/authContext';

const logo = require('../../../assets/images/bankomaclaricon900x900.png');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { getEmail } = useContext(AuthContext);

  const login = async () => {
    const result = await LoginAsync(email, password);
    if (result) {
      navigation.navigate('Home');
      alert(getEmail());
    } else {
      alert('Kullanıcı adı veya şifre yanlış');
    }
  };

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
      <TouchableOpacity onPress={login}>
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
