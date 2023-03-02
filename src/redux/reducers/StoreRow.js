/* eslint-disable prettier/prettier */
const initialState = [];
const StoreRow = (state = initialState, action) => {
  switch (action.type) {
    case 'save': {
      if (
        state.find(function (element) {
          return element.title === action.animeArray[0].title;
        })
      ) {
        state.forEach(e => {});
        let newData = state;
        // eslint-disable-next-line no-undef
        newData.splice(index, 1);
        state = [...newData];
      } else {
        state = [...state, ...action.animeArray];
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

export default StoreRow;
