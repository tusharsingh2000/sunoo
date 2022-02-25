import {Dimensions, StyleSheet} from 'react-native';
import {colors, sizes} from '../constants';

const {height} = Dimensions.get('window');

export const generalStyles = StyleSheet.create({
  authcontainer: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  p10: {
    padding: 10,
  },
  back: {
    position: 'absolute',
    left: 1,
  },
  listingMargin: {marginTop: height / 30},
});

export const authStyles = StyleSheet.create({
  title: {
    color: colors.darkBlue,
    fontSize: sizes.xxl,
    fontWeight: '700',
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontSize: sizes.l,
  },
  inputBox: {
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.darkBlue,
  },
  button: {
    padding: 10,
    backgroundColor: colors.lightBlue,
    borderRadius: 20,
    alignItems: 'center',
    color: '#fff',
  },
  hint: {
    fontSize: sizes.s,
    color: colors.lightBlue,
    padding: 10,
    alignSelf: 'flex-end',
  },
  warn: {
    fontSize: sizes.s,
    color: 'red',
    padding: 5,
    alignSelf: 'flex-end',
  },
});

export const textStyles = StyleSheet.create({
  titleCategory: {fontSize: 24, fontWeight: '700', color: '#fff'},
  nameCategory: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
