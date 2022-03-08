import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {useSelector} from 'react-redux';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors, heights} from '../../constants';
import {generalStyles} from '../../styles/styles';

export const ListByArtist = ({route, navigation}) => {
  const {artist} = route.params;
  const songlist = useSelector(state => state.songsReducer.artistsongs);
  const artistsongsFetched = useSelector(
    state => state.songsReducer.artistsongsFetched,
  );
  console.log({songlist});

  return (
    <ParallaxScrollView
      backgroundColor={colors.lightBlue}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={heights.foregroundHeader}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={artist.artistname} />
      )}
      isForegroundTouchable
      stickyHeaderHeight={heights.stickyHeader}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={artist.artistname}
          image={`https://drive.google.com/uc?id=${artist.image}`}
        />
      )}>
      <View style={generalStyles.listingMargin}>
        {artistsongsFetched ? (
          <View>
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
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        )}
      </View>
    </ParallaxScrollView>
  );
};
