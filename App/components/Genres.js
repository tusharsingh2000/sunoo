import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {genre, songs} from '../data';
import {generalStyles, textStyles} from '../styles/styles';
import {useDispatch} from 'react-redux';
import {updateCurrentPlayList} from '../redux/actions/actions';

export const Genres = ({navigation}) => {
  const dispatch = useDispatch();

  const clickHandler = id => {
    const songlist = songs.filter(song => genre[id].name === song.category);
    dispatch(updateCurrentPlayList(songlist));
    navigation.push('ListByGenre', {id: id});
  };
  return (
    <View>
      <View style={styles.title}>
        <Text style={textStyles.titleCategory}>Genres</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {genre.map(eachGenre => (
          <TouchableOpacity
            key={eachGenre.id}
            style={styles.liststyle}
            onPress={() => clickHandler(eachGenre.id)}>
            <View style={generalStyles.p10}>
              <Image style={styles.imageStyle} source={eachGenre.image} />
            </View>
            <View>
              <Text style={textStyles.nameCategory}>{eachGenre.name}</Text>
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
