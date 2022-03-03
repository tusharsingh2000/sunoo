import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Artists, Genres, HomeHeader, Language} from '../../components';
import {colors} from '../../constants';
import {
  getArtistsList,
  getGenresList,
  getLanguagesList,
} from '../../redux/services/homeService';

export const HomeScreen = ({navigation}) => {
  const isPlaying = useSelector(state => state.playerReducer.isPlaying);
  const userData = useSelector(state => state.authReducer.userData);
  console.log(userData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresList());
    dispatch(getArtistsList());
    dispatch(getLanguagesList());
  }, [dispatch]);

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
