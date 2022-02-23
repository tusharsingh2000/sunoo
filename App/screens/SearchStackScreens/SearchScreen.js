import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeHeader, SearchBox, SongCard} from '../../components';
import {generalStyles} from '../../styles/styles';
import {songs} from '../../data';
import {filterItems} from '../../utils/utils';

export const SearchScreen = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const search = async val => {
    setSearchValue(val);
    if (val !== '') {
      let result = await filterItems({
        array: songs,
        query: val.toLowerCase(),
      });
      await setSearchData(result);
    } else {
      setSearchData([]);
    }
  };

  return (
    <View style={generalStyles.container}>
      <View style={generalStyles.p10}>
        <HomeHeader title={'Search'} />
      </View>
      <View style={generalStyles.p10}>
        <SearchBox search={search.bind(this)} />
      </View>
      {searchValue && searchData.length === 0 ? (
        <Text style={styles.noResult}>No Results found</Text>
      ) : (
        <View>
          {searchData.map(data => (
            <View key={data?.id}>
              <SongCard songlist={songs} info={data} index={data.id} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noResult: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
});
