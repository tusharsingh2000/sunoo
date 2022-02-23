import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FavoriteScreen, LibraryScreen, RecentlyPlayedScreen} from '../screens';

export const LibraryRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Stack.Screen
          name="RecentlyPlayedScreen"
          component={RecentlyPlayedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
