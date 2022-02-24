/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {useSelector} from 'react-redux';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors} from '../../constants';
import {genre} from '../../data';

export const ListByGenre = ({route, navigation}) => {
  const {id} = route.params;
  const songlist = useSelector(state => state.playerReducer.currentPlayList);
  return (
    <ParallaxScrollView
      backgroundColor={colors.lightBlue}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={400}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={genre[id].name} />
      )}
      stickyHeaderHeight={60}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={genre[id].name}
          image={genre[id].image}
        />
      )}>
      <View style={{marginTop: 30}}>
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
