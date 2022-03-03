import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {toggleWidget, togglePlay} from '../redux/actions/actions';
import {colors} from '../constants';
import {PlayerScreen} from './Payer';
import TrackPlayer, {usePlaybackState, State} from 'react-native-track-player';
import TextTicker from 'react-native-text-ticker';

export const BottomPlayer = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const dispatch = useDispatch();
  const playbackState = usePlaybackState();

  const musicList = useSelector(state => state.playerReducer.currentPlayList);
  const musicData = useSelector(state => state.playerReducer.currentSong);
  const isPlaying = useSelector(state => state.playerReducer.isPlaying);
  const isMinimized = useSelector(state => state.playerReducer.isMinimized);

  console.log({musicList});

  const toggleWidgetHandler = async () => {
    dispatch(toggleWidget(!isMinimized));
  };

  const stopMusic = async () => {
    await TrackPlayer.stop();
    dispatch(togglePlay(false));
  };

  const togglePlayBack = async () => {
    const currentTrack = TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playbackState === State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View>
      <Modal
        useNativeDriver
        coverScreen={!isMinimized}
        hasBackdrop={!isMinimized}
        isVisible={isPlaying}
        onBackButtonPress={toggleWidgetHandler}>
        {isMinimized ? (
          <View
            style={[
              styles.modalContainer,
              {bottom: isKeyboardVisible ? 30 : 70},
            ]}>
            <TouchableOpacity
              onPress={toggleWidgetHandler}
              style={styles.mainContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://drive.google.com/uc?id=${musicData?.image}`,
                  }}
                />
              </View>
              <View style={styles.nameSection}>
                <TextTicker
                  style={{
                    fontSize: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  duration={5000}
                  loop
                  bounce
                  repeatSpacer={50}
                  shouldAnimateTreshold={10}
                  marqueeDelay={1000}>
                  <Text style={styles.songName}>{musicData?.songname}</Text>
                  <EIcon name="dot-single" color="#fff" />
                  <Text style={styles.artistName}>
                    {musicData?.artistId.artistname}
                  </Text>
                </TextTicker>
                <View style={styles.controlBox}>
                  <TouchableOpacity
                    onPress={() => togglePlayBack(playbackState)}>
                    <Icon
                      name={
                        playbackState === State.Playing ? 'pause' : 'caretright'
                      }
                      size={25}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={stopMusic}>
                    <Icon name={'close'} size={25} color={'#fff'} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <PlayerScreen index={musicList.indexOf(musicData)} />
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.lightBlue,
    position: 'absolute',
    marginHorizontal: -20,
  },
  mainContainer: {flexDirection: 'row'},
  image: {
    height: '100%',
    width: 50,
  },
  nameSection: {
    flexDirection: 'row',
    padding: 10,
    width: '90%',
    alignItems: 'center',
  },
  songName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  artistName: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '300',
  },
  imageContainer: {justifyContent: 'center'},
  controlBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    width: '40%',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
