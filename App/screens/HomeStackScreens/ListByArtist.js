import React from 'react';
import {View} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors, heights} from '../../constants';
import {artists} from '../../data';
import {generalStyles} from '../../styles/styles';

export const ListByArtist = ({route, navigation}) => {
  const {id, songlist} = route.params;
  return (
    <ParallaxScrollView
      backgroundColor={colors.lightBlue}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={heights.foregroundHeader}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={artists[id].name} />
      )}
      isForegroundTouchable
      stickyHeaderHeight={heights.stickyHeader}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={artists[id].name}
          image={artists[id].image}
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
