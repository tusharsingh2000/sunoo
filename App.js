import React from 'react';
import {BottomPlayer} from './App/components';
import {Routes} from './App/routes/Routes';
import TrackPlayer, {Capability} from 'react-native-track-player';

const App = () => {
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
        Capability.SeekTo,
      ],
      stopWithApp: true,
    });
  };
  start();
  return (
    <>
      <Routes />
      <BottomPlayer />
    </>
  );
};

export default App;
