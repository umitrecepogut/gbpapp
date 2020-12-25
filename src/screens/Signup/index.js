import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { SignupAsync } from './api/signup';
import { AuthContext } from '../../context/authContext';
import ButtonWithSpinner from '../../components/Buttons/ButtonWithSpinner';
import { Text } from '@ui-kitten/components';

const bgImage = require('../../../assets/images/wp6987433.png');
const logo = require('../../../assets/images/bankomaclariconcoz.png');

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useContext(AuthContext);

  const signup = async () => {
    setIsSubmitting(true);
    const result = await SignupAsync(email, password);
    if (result) {
      navigation.navigate('Login');
      alert(user.email);
    } else {
      alert('Unhandled error when signup');
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    setIsSubmitting(false);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
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
          <ButtonWithSpinner
            style={styles.btnSignup}
            text='Kayıt Ol'
            isSubmitting={isSubmitting}
            onClick={signup}
          />
          <View style={styles.textView}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text status='info'>Giriş yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    alignItems: 'center',
    marginTop: 12,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 300,
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
  btnSignup: {
    textAlign: 'center',
    backgroundColor: '#34495e',
    marginHorizontal: 20,
    marginTop: 15,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#34495e',
    fontSize: 18,
    color: '#ecf0f1',
  },
});

export default Signup;
