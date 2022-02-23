import {
  UPDATE_CURRENT_PLAYLIST,
  PLAY_SONG,
  TOGGLE_PLAY,
  TOGGLE_WIDGET,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ADD_TO_HISTORY,
} from '../actions/types';

const initialState = {
  currentPlayList: [],
  currentSong: {},
  isPlaying: false,
  isMinimized: true,
  favoriteList: [],
  recents: [],
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PLAYLIST:
      return {
        ...state,
        currentPlayList: action.list,
      };

    case PLAY_SONG:
      return {
        ...state,
        currentSong: action.song,
      };

    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: action.isPlaying,
      };

    case TOGGLE_WIDGET:
      return {
        ...state,
        isMinimized: action.isMinimized,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteList: state.favoriteList.concat(action.song),
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteList: state.favoriteList.filter(song => song.id !== action.key),
      };

    case ADD_TO_HISTORY:
      return {
        ...state,
        recents: state.recents.includes(action.song)
          ? state.recents
              .filter(item => item !== action.song)
              .concat(action.song)
          : state.recents.concat(action.song),
      };

    default:
      return state;
  }
};
