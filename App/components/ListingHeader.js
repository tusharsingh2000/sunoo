import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton} from '.';
import {generalStyles} from '../styles/styles';

export const ListingHeader = ({navigation, name}) => {
  return (
    <View style={styles.backgroundStyle}>
      <View style={generalStyles.back}>
        <BackButton navigation={navigation} />
      </View>
      <View>
        <Text style={styles.headrerName}>{name} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },

  headrerName: {fontSize: 16, fontWeight: '700', color: '#fff'},
});
