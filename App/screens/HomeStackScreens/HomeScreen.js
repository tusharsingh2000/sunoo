import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Artists, Genres, HomeHeader, Language} from '../../components';
import {colors} from '../../constants';

export const HomeScreen = ({navigation}) => {
  const isPlaying = useSelector(state => state.playerReducer.isPlaying);

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
