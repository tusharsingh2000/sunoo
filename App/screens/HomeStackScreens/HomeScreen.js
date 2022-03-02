import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Artists, Genres, HomeHeader, Language} from '../../components';
import {colors} from '../../constants';

export const HomeScreen = ({navigation}) => {
  // const {token} = route.params;

  const isPlaying = useSelector(state => state.playerReducer.isPlaying);
  const userData = useSelector(state => state.authReducer.userData);
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer ' + token,
  //   },
  // };
  console.log(userData);

  return (
    <ScrollView
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginBottom: isPlaying ? 40 : 0,
        },
      ]}>
      <View style={styles.padding}>
        <HomeHeader title={'Hi, Welcome'} />
      </View>
      <View style={styles.padding}>
        <Genres navigation={navigation} />
      </View>
      <View style={styles.padding}>
        <Artists navigation={navigation} />
      </View>
      <View style={styles.padding}>
        <Language navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  padding: {
    padding: 10,
  },
});
