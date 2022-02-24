import React from 'react';
import {View, StyleSheet} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors} from '../../constants';
import {languages} from '../../data';
import {useSelector} from 'react-redux';

export const RecentlyPlayedScreen = ({navigation}) => {
  const songlist = useSelector(state => state.playerReducer.recents);

  return (
    <ParallaxScrollView
      backgroundColor={colors.lightBlue}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={200}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={'Recently Played'} />
      )}
      stickyHeaderHeight={40}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={'Recently Played'}
          image={languages[0].image}
        />
      )}>
      <View style={styles.margin}>
        {songlist.reverse().map((eachSong, index) => (
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
