/* eslint-disable prettier/prettier */
const initialState = [];

const StoreIds = (state = initialState, action) => {
  switch (action.type) {
    case 'clicked': {
      if (state[0] === -1) {
        state = [action.animeId];
      } else {
        // if image id is already present
        if (
          state.find(function (element) {
            return element === action.animeId;
          })
        ) {
          index = state.indexOf(action.animeId);
          let newData = state;
          newData.splice(index, 1);
          state = [...newData];
        } else {
          state = [...state, action.animeId];
        }
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

export default StoreIds;
