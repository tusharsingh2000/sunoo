import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Artists, Genres, HomeHeader, Language} from '../../components';
import {colors} from '../../constants';
import TrackPlayer, {Capability, Event} from 'react-native-track-player';

export const HomeScreen = ({navigation}) => {
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
        Capability.SeekTo,
      ],
      stopWithApp: true,
    });
  };
  start();

  // Event.RemotePlay

  return (
    <ScrollView style={styles.container}>
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
