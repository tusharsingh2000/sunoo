export const filterItems = ({array, query}) => {
  return array.filter(item => {
    let cards =
      item.songName.toLowerCase().indexOf(query) !== -1 ||
      item.artist.toLowerCase().indexOf(query) !== -1;
    return cards;
  });
};

// export const BASE_URL = 'https://sunoobe.herokuapp.com';
export const BASE_URL = 'http://192.168.0.139:3000';
