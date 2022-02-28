import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {languages, songs} from '../data';
import {generalStyles, textStyles} from '../styles/styles';

export const Language = ({navigation}) => {
  const clickHandler = id => {
    const songlist = songs.filter(song => languages[id].name === song.language);
    navigation.push('ListByLanguage', {id: id, songlist});
  };
  return (
    <View>
      <View style={generalStyles.p10}>
        <Text style={textStyles.titleCategory}>Languages</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {languages.map(eachLanguage => (
          <TouchableOpacity
            key={eachLanguage.id}
            style={styles.liststyle}
            onPress={() => clickHandler(eachLanguage.id)}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                padding: 50,
                backgroundColor: eachLanguage.color,
              }}>
              <Text style={textStyles.nameCategory}>{eachLanguage.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  liststyle: {
    padding: 15,
    alignItems: 'center',
  },
});
