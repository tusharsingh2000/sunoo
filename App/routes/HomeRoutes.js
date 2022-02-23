import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  ListByArtist,
  ListByGenre,
  ListByLanguage,
} from '../screens';

export const HomeRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListByArtist" component={ListByArtist} />
        <Stack.Screen name="ListByGenre" component={ListByGenre} />
        <Stack.Screen name="ListByLanguage" component={ListByLanguage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
