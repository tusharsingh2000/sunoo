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
import {toggleWidget} from '../redux/actions/actions';
import {colors} from '../constants';
import {PlayerScreen} from './Payer';
import TrackPlayer, {usePlaybackState, State} from 'react-native-track-player';
import {ToggleFavorite} from '.';
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

  const toggleWidgetHandler = async () => {
    dispatch(toggleWidget(!isMinimized));
  };

  console.log(isMinimized, isPlaying);

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
              // eslint-disable-next-line react-native/no-inline-styles
              {bottom: isKeyboardVisible ? 30 : 80},
            ]}>
            <TouchableOpacity
              onPress={toggleWidgetHandler}
              style={styles.mainContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={musicData?.image} />
              </View>
              <View style={styles.nameSection}>
                <TextTicker
                  style={{
                    fontSize: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  duration={3000}
                  loop
                  bounce
                  repeatSpacer={50}
                  shouldAnimateTreshold={10}
                  marqueeDelay={1000}>
                  <Text style={styles.songName}>{musicData?.songName}</Text>
                  <EIcon name="dot-single" color="#fff" />
                  <Text style={styles.artistName}>{musicData?.artist}</Text>
                </TextTicker>
                <View style={styles.controlBox}>
                  <View>
                    <ToggleFavorite info={musicData} />
                  </View>
                  <TouchableOpacity onPress={() => togglePlay(playbackState)}>
                    <Icon
                      name={
                        playbackState === State.Playing ? 'pause' : 'caretright'
                      }
                      size={30}
                      color={'#fff'}
                    />
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
    backgroundColor: colors.darkBlue,
    position: 'absolute',
    width: 360,
  },
  mainContainer: {flexDirection: 'row'},
  image: {
    height: '100%',
    width: 50,
  },
  nameSection: {
    flexDirection: 'row',
    padding: 10,
    width: '85%',
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
    // backgroundColor: 'green',
    width: '30%',
    justifyContent: 'space-around',
  },
});