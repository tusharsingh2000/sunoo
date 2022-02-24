import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Text, View, StyleSheet} from 'react-native';
import {SearchScreen, SettingScreen} from '../screens';
import {colors} from '../constants';
import {HomeRoutes} from './HomeRoutes';
import {LibraryRoutes} from './LibraryRoutes';

export const BottomRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: `${colors.black}`,
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: colors.lightBlue,
            paddingTop: 5,
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <View style={styles.group}>
                <Icon name="home" color={color} size={22} />
                <Text style={[{color: color}, styles.text]}>Home</Text>
              </View>
            ),
          }}
          name="HomeRoutes"
          component={HomeRoutes}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <View style={styles.group}>
                <FIcon name="search" size={22} color={color} />
                <Text style={[{color: color}, styles.text]}>Search</Text>
              </View>
            ),
          }}
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <View style={styles.group}>
                <MIcon name="my-library-music" size={22} color={color} />
                <Text style={[{color: color}, styles.text]}>Library</Text>
              </View>
            ),
          }}
          name="Library"
          component={LibraryRoutes}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <View style={styles.group}>
                <MIcon name="settings" size={22} color={color} />
                <Text style={[{color: color}, styles.text]}>Settings</Text>
              </View>
            ),
          }}
          name="Setting"
          component={SettingScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  group: {
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});
