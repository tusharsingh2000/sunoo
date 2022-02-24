import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export const LibraryViewCard = ({data, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.push(data.route)}>
      <View style={styles.card}>
        <View>
          <Text style={styles.font}>{data.name}</Text>
        </View>
        <View>
          <Icon name={data.icon} size={30} color={'#fff'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
  },
  card: {
    padding: 30,
    borderWidth: 1,
    backgroundColor: colors.lightBlue,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  font: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});
