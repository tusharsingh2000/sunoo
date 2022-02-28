import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import {ToggleFavorite} from '.';
import Icon from 'react-native-vector-icons/Entypo';
import {
  addToHistory,
  playSong,
  togglePlay,
  updateCurrentPlayList,
} from '../redux/actions/actions';
import {colors} from '../constants';

export const SongCard = ({songlist, info, index}) => {
  const isPlaying = useSelector(state => state.playerReducer.isPlaying);
  const currentSong = useSelector(state => state.playerReducer.currentSong);

  const dispatch = useDispatch();
  const clickHandler = async () => {
    // Add a track to the queue
    dispatch(playSong(info));
    dispatch(addToHistory(info));
    dispatch(togglePlay(true));
    await TrackPlayer.reset();
    await TrackPlayer.add(
      songlist.map(eachSong => ({
        id: eachSong.id,
        url: eachSong.url,
        title: eachSong.songName,
        artist: eachSong.artist,
        artwork: eachSong.image,
      })),
    );
    console.log('hh', await TrackPlayer.getQueue());
    dispatch(updateCurrentPlayList(songlist));
    await TrackPlayer.skip(index);
    await TrackPlayer.play();
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={clickHandler} style={styles.container}>
          <View style={styles.index}>
            <Text style={styles.number}>{index + 1}</Text>
          </View>
          <View
            // onPress={() => toggleModal(index)}
            style={styles.pad5}>
            <Image style={styles.image} source={info.image} />
          </View>
          <View
            // onPress={() => toggleModal(index)}
            style={styles.nameContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 200,
              }}>
              <Text
                numberOfLines={1}
                style={[
                  styles.songName,
                  {
                    color:
                      isPlaying && currentSong.id === info.id
                        ? colors.lightBlue
                        : '#fff',
                  },
                ]}>
                {info.songName}
              </Text>
              {isPlaying && currentSong.id === info.id ? (
                <View style={{padding: 5}}>
                  <Icon name="note" size={10} color={colors.lightBlue} />
                </View>
              ) : null}
            </View>
            <View>
              <Text style={styles.artist}>{info.artist}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <ToggleFavorite info={info} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  pad5: {padding: 5},
  image: {height: 50, width: 50},
  nameContainer: {padding: 5, justifyContent: 'center'},
  songName: {
    fontWeight: '500',
    fontSize: 16,
  },
  artist: {color: '#fff', fontWeight: '300', fontSize: 12},
  index: {
    justifyContent: 'center',
    padding: 10,
  },
  number: {
    color: '#fff',
    fontWeight: '500',
  },
});
