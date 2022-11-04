/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, StyleSheet, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';

import Background from '../../assets/pante.png';
import Logo from '../../assets/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const LoginPressed = () => {
    if (username === 'admin' && password === 'admin'){
      Alert.alert('Login Berhasil', 'Selamat datang admin!');
      setTimeout(() => navigation.navigate('Home'))
    } else if (username === '' || password === '') {
      Alert.alert('Login Gagal', 'Username dan password harus diisi!');
    }
    else {
      Alert.alert('Login Gagal', 'Username atau password salah!');
    }
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.componentWrapper}>
          <Image source={Logo} style={{width: 150,height: 150,resizeMode: 'contain', alignSelf: 'center'}} />
          <Text style={styles.title}>Wisata</Text>
          <CustomInput placeholder="Username" value={username} onchange={setUsername} />
          <CustomInput placeholder="Password" value={password} onchange={setPassword} securetextentry={true} />
          <CustomButton placeholder="Login" onpress={LoginPressed} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    resizeMode: 'cover',
    flex: 1,
  },
  componentWrapper: {
    marginVertical: '30%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 5,
  },
});

export default Login;