import React from 'react';
import {View} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors, heights} from '../../constants';
import {languages} from '../../data';
import {generalStyles} from '../../styles/styles';

export const ListByLanguage = ({route, navigation}) => {
  const {id, songlist} = route.params;
  return (
    <ParallaxScrollView
      backgroundColor={languages[id].color}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={heights.foregroundHeader}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={languages[id].name} />
      )}
      stickyHeaderHeight={heights.stickyHeader}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={languages[id].name}
          image={languages[id].image}
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
