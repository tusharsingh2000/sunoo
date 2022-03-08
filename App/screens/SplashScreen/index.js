import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../constants';
import {storageKey} from '../../constants/auth';

export const SplashScreen = ({navigation}) => {
  const logo = require('../../assets/logo/logo.jpg');
  useEffect(() => {
    const app = async () => {
      const userToken = await AsyncStorage.getItem(storageKey.AUTH_TOKEN);
      console.log(userToken);
      setTimeout(() => {
        navigation.navigate(userToken === null ? 'LoginScreen' : 'HomeScreen');
      }, 1000);
    };
    app();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
