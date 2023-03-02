/* eslint-disable prettier/prettier */
export const HeartClicked = id => {
  return {
    type: 'clicked',
    animeId: id,
  };
};
export const RowSave = array => {
  return {
    type: 'save',
    animeArray: array,
  };
};
