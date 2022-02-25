import React, {useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../constants';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import {playSong, toggleWidget} from '../redux/actions/actions';
import {ToggleFavorite} from '.';
const {width, height} = Dimensions.get('window');

export const PlayerScreen = ({index}) => {
  const [fav, setFav] = useState(false);
  const [songNumber, setSongNumber] = useState(index);

  const songlist = useSelector(state => state.playerReducer.currentPlayList);
  const musicData = useSelector(state => state.playerReducer.currentSong);
  const isMinimized = useSelector(state => state.playerReducer.isMinimized);

  const playbackState = usePlaybackState();
  const progress = useProgress();
  const dispatch = useDispatch();

  const songSlider = useRef(null);

  const scroll = async ({nativeEvent}) => {
    const slide = Math.round(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setSongNumber(slide);
    dispatch(playSong(songlist[slide]));
    if (songlist[slide] !== musicData) {
      await TrackPlayer.skip(slide);
    }
  };

  const renderImage = item => {
    return (
      <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.image} source={musicData?.image} />
      </View>
    );
  };

  const backwardHandle = async () => {
    if (songNumber > 0) {
      songSlider.current?.scrollToIndex({index: songNumber - 1});
      dispatch(playSong(songlist[songNumber - 1]));
      await TrackPlayer.skip(songNumber - 1);
      setSongNumber(songNumber - 1);
    }
  };

  const forwardHandle = async () => {
    if (songNumber < songlist?.length - 1) {
      songSlider.current?.scrollToIndex({index: songNumber + 1});
      dispatch(playSong(songlist[songNumber + 1]));
      await TrackPlayer.skip(songNumber + 1);
      setSongNumber(songNumber + 1);
    }
  };

  const togglePlay = async () => {
    const currentTrack = TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playbackState === State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  const toggleWidgetHandler = async () => {
    dispatch(toggleWidget(!isMinimized));
  };

  return (
    <View style={styles.modalContainer}>
      <View
        style={{
          width: '100%',
          padding: 30,
        }}>
        <TouchableOpacity onPress={toggleWidgetHandler}>
          <Icon name="down" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: height / 3,
        }}>
        <FlatList
          renderItem={renderImage}
          keyExtractor={item => item.id}
          ref={songSlider}
          horizontal
          pagingEnabled
          data={songlist}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={songNumber}
          onScroll={scroll}
        />
      </View>
      <View>
        <View style={styles.nameSection}>
          <View>
            <View>
              <Text style={styles.songName}>{musicData?.songName} </Text>
            </View>
            <View>
              <Text style={styles.artistName}>{musicData?.artist} </Text>
            </View>
          </View>
          <View onTouchStart={() => setFav(!fav)} style={styles.heart}>
            <ToggleFavorite info={musicData} />
          </View>
        </View>
        <View style={styles.slider}>
          <Slider
            style={{width: '100%', height: 50}}
            minimumValue={0}
            value={progress.position}
            maximumValue={progress.duration}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />
        </View>
        <View style={styles.timer}>
          <View>
            <Text>
              {new Date(progress.position * 1000).toISOString().substr(14, 5)}
            </Text>
          </View>
          <View>
            <Text>
              -
              {new Date((progress.duration - progress.position) * 1000)
                .toISOString()
                .substr(14, 5)}
            </Text>
          </View>
        </View>
        <View style={styles.controlBox}>
          <TouchableOpacity onPress={backwardHandle}>
            <Icon name="stepbackward" size={40} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => togglePlay(playbackState)}
            style={styles.playPauseBtton}>
            <Icon
              name={playbackState === State.Playing ? 'pause' : 'caretright'}
              size={40}
              color={'#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={forwardHandle}>
            <Icon name="stepforward" size={40} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    flex: 1,
    margin: -20,
  },
  image: {
    height: height / 3,
    width: height / 3,
  },
  nameSection: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  heart: {marginLeft: 'auto', padding: 10, justifyContent: 'center'},
  songName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
  artistName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '300',
  },
  slider: {
    paddingHorizontal: 20,
  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  playPauseBtton: {
    padding: 15,
    backgroundColor: colors.blue,
    borderRadius: 100,
  },
  controlBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
});
