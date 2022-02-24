import React from 'react';
import {View, StyleSheet} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {useSelector} from 'react-redux';
import {ForegroundHeader, ListingHeader, SongCard} from '../../components';
import {colors} from '../../constants';
import {languages} from '../../data';

export const ListByLanguage = ({route, navigation}) => {
  const {id} = route.params;
  const songlist = useSelector(state => state.playerReducer.currentPlayList);
  return (
    <ParallaxScrollView
      backgroundColor={languages[id].color}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={400}
      renderStickyHeader={() => (
        <ListingHeader navigation={navigation} name={languages[id].name} />
      )}
      stickyHeaderHeight={60}
      renderForeground={() => (
        <ForegroundHeader
          navigation={navigation}
          name={languages[id].name}
          image={languages[id].image}
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
