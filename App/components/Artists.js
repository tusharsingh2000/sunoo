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
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

export const Artists = ({navigation}) => {
  const artistsFetched = useSelector(state => state.homeReducer.artistsFetched);

  console.log({artistsFetched});

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

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
        {artists.map((eachArtist, index) => (
          <TouchableOpacity
            disabled={!artistsFetched}
            key={index}
            style={styles.liststyle}
            onPress={() => clickHandler(eachArtist.id, eachArtist)}>
            <ShimmerPlaceHolder
              visible={artistsFetched}
              style={!artistsFetched ? styles.shimmerStyleImg : null}>
              <View style={generalStyles.p10}>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: `https://drive.google.com/uc?id=${eachArtist.image}`,
                  }}
                />
              </View>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              visible={artistsFetched}
              style={!artistsFetched ? styles.shimmerStyleTxt : null}>
              <View>
                <Text style={textStyles.nameCategory}>
                  {eachArtist.artistname}
                </Text>
              </View>
            </ShimmerPlaceHolder>
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
  shimmerStyleImg: {
    height: 125,
    width: 125,
    margin: 10,
    borderRadius: 100,
  },
  shimmerStyleTxt: {
    width: 100,
  },
});
