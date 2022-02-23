import React from 'react';
import {View} from 'react-native';
import {LibraryViewCard, HomeHeader} from '../../components';
import {libraryItems} from '../../data';
import {generalStyles} from '../../styles/styles';

export const LibraryScreen = ({navigation}) => {
  return (
    <View style={generalStyles.container}>
      <View style={generalStyles.p10}>
        <HomeHeader title={'Your Library'} />
      </View>
      <View>
        {libraryItems.map((eachItem, index) => (
          <View key={index}>
            <LibraryViewCard data={eachItem} navigation={navigation} />
          </View>
        ))}
      </View>
    </View>
  );
};
