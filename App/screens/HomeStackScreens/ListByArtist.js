import React from 'react';
import {View, StyleSheet} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors} from '../../constants';
import {artists} from '../../data';
import {useSelector} from 'react-redux';

export const ListByArtist = ({route, navigation}) => {
  const {id} = route.params;
  const songlist = useSelector(state => state.playerReducer.currentPlayList);

  return (
    <ParallaxScrollView
      backgroundColor={colors.lightBlue}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={400}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={artists[id].name} />
      )}
      isForegroundTouchable
      stickyHeaderHeight={60}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={artists[id].name}
          image={artists[id].image}
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
