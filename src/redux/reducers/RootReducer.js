/* eslint-disable prettier/prettier */
import StoreIds from './StoreIds';
import StoreRow from './StoreRow';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  StoreIds,
  StoreRow,
});

export default RootReducer;
