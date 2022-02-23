import {
  UPDATE_CURRENT_PLAYLIST,
  PLAY_SONG,
  TOGGLE_PLAY,
  TOGGLE_WIDGET,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ADD_TO_HISTORY,
} from './types';

export const updateCurrentPlayList = list => ({
  type: UPDATE_CURRENT_PLAYLIST,
  list: list,
});

export const playSong = song => ({
  type: PLAY_SONG,
  song: song,
});

export const togglePlay = isPlaying => ({
  type: TOGGLE_PLAY,
  isPlaying: isPlaying,
});

export const toggleWidget = isMinimized => ({
  type: TOGGLE_WIDGET,
  isMinimized: isMinimized,
});

export const addToFavorites = song => ({
  type: ADD_TO_FAVORITES,
  song: song,
});

export const removeFromFavorites = id => ({
  type: REMOVE_FROM_FAVORITES,
  key: id,
});

export const addToHistory = song => ({
  type: ADD_TO_HISTORY,
  song: song,
});
