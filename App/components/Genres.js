import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {generalStyles, textStyles} from '../styles/styles';

export const Genres = ({navigation}) => {
  const genres = useSelector(state => state.homeReducer.genres);
  // const clickHandler = id => {
  //   const songlist = songs.filter(song => genre[id].name === song.category);
  //   // navigation.push('ListByGenre', {id: id, songlist});
  // };

  return (
    <View>
      <View style={styles.title}>
        <Text style={textStyles.titleCategory}>Genres</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {genres.map(eachGenre => (
          <TouchableOpacity
            key={eachGenre.id}
            style={styles.liststyle}
            // onPress={() => clickHandler(eachGenre.id)}>
          >
            <View style={generalStyles.p10}>
              <Image style={styles.imageStyle} source={eachGenre.image} />
            </View>
            <View>
              <Text style={textStyles.nameCategory}>{eachGenre.genrename}</Text>
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
    padding: 5,
    alignItems: 'center',
  },
  imageStyle: {
    height: 125,
    width: 125,
  },
});
