import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {useSelector} from 'react-redux';
import {BackButton, SongCard} from '../../components';
import {colors} from '../../constants';
import {languages} from '../../data';
import {generalStyles} from '../../styles/styles';

export const ListByLanguage = ({route, navigation}) => {
  const {id} = route.params;
  const songlist = useSelector(state => state.playerReducer.currentPlayList);
  return (
    <ParallaxScrollView
      backgroundColor={languages[id].color}
      contentBackgroundColor={colors.black}
      parallaxHeaderHeight={400}
      renderStickyHeader={() => (
        <View style={styles.backgroundStyle}>
          <View style={generalStyles.back}>
            <BackButton navigation={navigation} />
          </View>
          <Text style={styles.headrerName}>{languages[id].name}</Text>
        </View>
      )}
      stickyHeaderHeight={40}
      renderForeground={() => (
        <View>
          <Image style={styles.image} source={languages[id].image} />
          <View style={[generalStyles.back, {marginTop: 10}]}>
            <BackButton navigation={navigation} />
          </View>
          <View style={styles.foregroundName}>
            <Text style={styles.boldText}>{languages[id].name}</Text>
          </View>
        </View>
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
  backgroundStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: 4,
  },
  headrerName: {fontSize: 18, fontWeight: '700', color: '#fff'},
  image: {width: '100%', height: '100%'},
  foregroundName: {position: 'absolute', bottom: 1, width: '100%'},
  boldText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '800',
    textAlign: 'center',
  },
  margin: {marginTop: 30},
});
