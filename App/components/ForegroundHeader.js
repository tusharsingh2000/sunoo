/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BackButton} from '.';
import {generalStyles} from '../styles/styles';

export const ForegroundHeader = ({navigation, name, image}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: image}} />
      <View style={[generalStyles.back, {marginTop: 10}]}>
        <BackButton navigation={navigation} />
      </View>
      <View style={styles.foregroundName}>
        <Text style={styles.boldText}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: '100%'},
  foregroundName: {position: 'absolute', bottom: 1, width: '100%'},
  boldText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
  },
});
