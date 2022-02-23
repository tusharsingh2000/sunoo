import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites, removeFromFavorites} from '../redux/actions/actions';

export const ToggleFavorite = ({info}) => {
  const dispatch = useDispatch();

  const favmusic = useSelector(state => state.playerReducer.favoriteList);
  const [fav, setFav] = useState(favmusic.includes(info));

  const toggleFavorite = () => {
    if (!fav) {
      dispatch(addToFavorites(info));
    } else {
      dispatch(removeFromFavorites(info.id));
    }
    setFav(!fav);
  };

  return (
    <TouchableOpacity onPress={toggleFavorite} style={styles.heart}>
      {fav ? (
        <Icon name="heart" size={25} color={'#fff'} />
      ) : (
        <Icon name="hearto" size={25} color={'#fff'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heart: {marginLeft: 'auto', padding: 5, justifyContent: 'center'},
});
