import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Otp, SplashScreen} from '../screens';
import {BottomRoutes} from './BottomRoutes';

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="OtpScreen" component={Otp} />
        <Stack.Screen name="HomeScreen" component={BottomRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
