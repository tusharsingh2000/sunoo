import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text numberOfLines={1} style={styles.boldText}>
          {title}
        </Text>
      </View>

      <View style={styles.smallContainer}>
        <View style={styles.icons}>
          <Icon name="notifications" size={25} color={'#fff'} />
        </View>

        <View>
          <Icon name="time-outline" size={25} color={'#fff'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  smallContainer: {
    flexDirection: 'row',
  },
  boldText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  icons: {
    paddingRight: 15,
  },
});
