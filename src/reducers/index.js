import {combineReducers} from 'redux';
import { selectSong } from '../actions';

//نیاز به اکشن نداریم زیرا این تابع یک آرایه ی استاتیک است و هچ تغییری نمیکند
const songListReducer = () => {
  return [
    { title: "first song", duration: "4:05" },
    { title: "second song", duration: "2:30" },
    { title: "third song", duration: "3:15" },
    { title: "forth song", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  
  return selectedSong;
};


export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
});
