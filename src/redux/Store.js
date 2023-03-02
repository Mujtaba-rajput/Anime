/* eslint-disable prettier/prettier */
import {legacy_createStore} from 'redux';
import RootReducer from './reducers/RootReducer';

const Store = legacy_createStore(RootReducer);
export default Store;
