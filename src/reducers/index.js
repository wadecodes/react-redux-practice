import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Tik-Tok',
      duration: '04:05',
    },
    {
      title: 'Macarena',
      duration: '02:03',
    },
    {
      title: 'I Want it That Way',
      duration: '03:08',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
