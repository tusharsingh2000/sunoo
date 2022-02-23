import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {artists, songs} from '../data';
import {generalStyles, textStyles} from '../styles/styles';
import {useDispatch} from 'react-redux';
import {updateCurrentPlayList} from '../redux/actions/actions';

export const Artists = ({navigation}) => {
  const dispatch = useDispatch();

  const clickHandler = id => {
    const songlist = songs.filter(song => artists[id].name === song.artist);
    dispatch(updateCurrentPlayList(songlist));
    navigation.push('ListByArtist', {id: id});
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
            onPress={() => clickHandler(eachArtist.id)}>
            <View style={generalStyles.p10}>
              <Image style={styles.imageStyle} source={eachArtist.image} />
            </View>
            <View>
              <Text style={textStyles.nameCategory}>{eachArtist.name}</Text>
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
