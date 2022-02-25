import React from 'react';
import {View} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {useSelector} from 'react-redux';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors, heights} from '../../constants';
import {genre} from '../../data';
import {generalStyles} from '../../styles/styles';

export const ListByGenre = ({route, navigation}) => {
  const {id} = route.params;
  const songlist = useSelector(state => state.playerReducer.currentPlayList);
  return (
    <ParallaxScrollView
      backgroundColor={colors.lightBlue}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={heights.foregroundHeader}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={genre[id].name} />
      )}
      stickyHeaderHeight={heights.stickyHeader}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={genre[id].name}
          image={genre[id].image}
        />
      )}>
      <View style={generalStyles.listingMargin}>
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
