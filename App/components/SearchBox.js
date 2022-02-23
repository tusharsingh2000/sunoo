import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants';

export const SearchBox = ({search}) => {
  return (
    <View style={styles.search}>
      <View>
        <Icon name="search" size={30} />
      </View>
      <View>
        <TextInput
          onChangeText={val => search(val)}
          style={styles.input}
          placeholder="Songs, Artists, Albums"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    backgroundColor: colors.blue,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {color: '#fff', fontWeight: '500', fontSize: 16},
});
