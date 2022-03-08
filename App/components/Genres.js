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
import {generalStyles, textStyles} from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {getGenreSongs} from '../redux/services/songsService';

export const Genres = ({navigation}) => {
  const genres = useSelector(state => state.homeReducer.genres);
  const genresFetched = useSelector(state => state.homeReducer.genresFetched);
  const dispatch = useDispatch();
  console.log({genresFetched});

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  const clickHandler = (id, genre) => {
    dispatch(getGenreSongs(id));
    navigation.push('ListByGenre', {genre: genre});
  };

  return (
    <View>
      <View style={styles.title}>
        <Text style={textStyles.titleCategory}>Genres</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {genres.map((eachGenre, index) => (
          <TouchableOpacity
            disabled={!genresFetched}
            key={index}
            style={styles.liststyle}
            onPress={() => clickHandler(eachGenre._id, eachGenre)}>
            <ShimmerPlaceHolder
              visible={genresFetched}
              style={!genresFetched ? styles.shimmerStyleImg : null}>
              <View style={generalStyles.p10}>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: `https://drive.google.com/uc?id=${eachGenre.image}`,
                  }}
                />
              </View>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              visible={genresFetched}
              style={!genresFetched ? styles.shimmerStyleTxt : null}>
              <View>
                <Text style={textStyles.nameCategory}>
                  {eachGenre.genrename}
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
    padding: 5,
    alignItems: 'center',
  },
  imageStyle: {
    height: 125,
    width: 125,
  },
  shimmerStyleImg: {
    height: 125,
    width: 125,
    margin: 10,
  },
  shimmerStyleTxt: {
    width: 50,
  },
});
