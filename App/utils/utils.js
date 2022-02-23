export const filterItems = ({array, query}) => {
  return array.filter(item => {
    let cards =
      item.songName.toLowerCase().indexOf(query) !== -1 ||
      item.artist.toLowerCase().indexOf(query) !== -1;
    return cards;
  });
};
