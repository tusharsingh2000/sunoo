import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {useSelector} from 'react-redux';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors, heights} from '../../constants';
import {generalStyles} from '../../styles/styles';

export const ListByLanguage = ({route, navigation}) => {
  const {language} = route.params;
  const songlist = useSelector(state => state.songsReducer.languagesongs);
  const languagesongsFetched = useSelector(
    state => state.songsReducer.languagesongsFetched,
  );
  return (
    <ParallaxScrollView
      backgroundColor={colors.lightBlue}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={heights.foregroundHeader}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={language.languagename} />
      )}
      stickyHeaderHeight={heights.stickyHeader}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={language.languagename}
          image={`https://drive.google.com/uc?id=${language.image}`}
        />
      )}>
      <View style={generalStyles.listingMargin}>
        {languagesongsFetched ? (
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
