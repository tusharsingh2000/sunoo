import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {generalStyles, textStyles} from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {getLanguageSongs} from '../redux/services/songsService';

export const Language = ({navigation}) => {
  const dispatch = useDispatch();
  const languages = useSelector(state => state.homeReducer.languages);
  const languagesFetched = useSelector(
    state => state.homeReducer.languagesFetched,
  );

  console.log({languagesFetched});

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  const clickHandler = (id, language) => {
    dispatch(getLanguageSongs(id));
    navigation.push('ListByLanguage', {language: language});
  };

  return (
    <View>
      <View style={styles.title}>
        <Text style={textStyles.titleCategory}>Languages</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {languages.map((eachLanguage, index) => (
          <TouchableOpacity
            disabled={!languagesFetched}
            key={index}
            style={styles.liststyle}
            onPress={() => clickHandler(eachLanguage._id, eachLanguage)}>
            <ShimmerPlaceHolder
              visible={languagesFetched}
              style={!languagesFetched ? styles.shimmerStyleImg : null}>
              <View style={generalStyles.p10}>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: `https://drive.google.com/uc?id=${eachLanguage.image}`,
                  }}
                />
              </View>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              visible={languagesFetched}
              style={!languagesFetched ? styles.shimmerStyleTxt : null}>
              <View>
                <Text style={textStyles.nameCategory}>
                  {eachLanguage.languagename}
                </Text>
              </View>
            </ShimmerPlaceHolder>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 20,
  },
  liststyle: {
    padding: 5,
    alignItems: 'center',
  },
  imageStyle: {
    height: 125,
    width: 125,
  },
  shimmerStyleImg: {
    height: 125,
    width: 125,
    margin: 10,
  },
  shimmerStyleTxt: {
    width: 50,
  },
});
