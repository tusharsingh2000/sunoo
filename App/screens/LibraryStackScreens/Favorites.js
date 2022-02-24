import React from 'react';
import {View, StyleSheet} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors} from '../../constants';
import {languages} from '../../data';
import {useSelector} from 'react-redux';

export const FavoriteScreen = ({navigation}) => {
  const songlist = useSelector(state => state.playerReducer.favoriteList);

  return (
    <ParallaxScrollView
      backgroundColor={colors.lightBlue}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={200}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={'Your Favorites'} />
      )}
      stickyHeaderHeight={60}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={'Your Favorites'}
          image={languages[1].image}
        />
      )}>
      <View style={styles.margin}>
        {songlist.map((eachSong, index) => (
          <View key={index}>
            <SongCard
              songlist={songlist}
              navigation={navigation}
              info={eachSong}
              index={index}
            />
          </View>
        ))}
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  margin: {marginTop: 30},
});
