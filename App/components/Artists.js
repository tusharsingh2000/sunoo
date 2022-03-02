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

export const Artists = ({navigation}) => {
  const clickHandler = id => {
    const songlist = songs.filter(song => artists[id].name === song.artist);
    navigation.push('ListByArtist', {id: id, songlist: songlist});
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
              <Image
                style={styles.imageStyle}
                source={{
                  uri: `https://drive.google.com/uc?id=${artists[0].image}`,
                }}
              />
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
