/* eslint-disable prettier/prettier */
import React from 'react';
import Favorites from '../screens/Favourites';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './BottomTabs';

const MyDrawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <MyDrawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#C70039',
        drawerInactiveTintColor: 'white',
        drawerStyle: {backgroundColor: '#1C1A1A'},
        headerStyle: {backgroundColor: '#C70039'},
        headerTintColor: '#1C1A1A',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <MyDrawer.Screen name="Animes" component={Main} />
      <MyDrawer.Screen name="Favorites" component={Favorites} />
    </MyDrawer.Navigator>
  );
};

export default Drawer;
