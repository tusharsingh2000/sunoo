import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getArtistSongs} from '../redux/services/songsService';
import {generalStyles, textStyles} from '../styles/styles';

export const Artists = ({navigation}) => {
  const artists = useSelector(state => state.homeReducer.artists);
  const dispatch = useDispatch();
  const clickHandler = (id, artist) => {
    dispatch(getArtistSongs(id));
    navigation.push('ListByArtist', {artist: artist});
  };

  return (
    <View>
      <View style={styles.title}>
        <Text style={textStyles.titleCategory}>Artists</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {artists.map(eachArtist => (
          <TouchableOpacity
            key={eachArtist.id}
            style={styles.liststyle}
            onPress={() => clickHandler(eachArtist.id, eachArtist)}>
            <View style={generalStyles.p10}>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: `https://drive.google.com/uc?id=${eachArtist.image}`,
                }}
              />
            </View>
            <View>
              <Text style={textStyles.nameCategory}>
                {eachArtist.artistname}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 20,
  },
  liststyle: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 100,
    height: 125,
    width: 125,
  },
});
