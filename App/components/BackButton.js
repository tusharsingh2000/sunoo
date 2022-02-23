import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity style={{padding: 10}} onPress={() => navigation.goBack()}>
      <Icon name="arrowleft" size={25} color={'#fff'} />
    </TouchableOpacity>
  );
};
