import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimeAiring from '../screens/AnimeAiring';
import AnimeComplete from '../screens/AnimeComplete';
import AnimeUpcoming from '../screens/AnimeUpcoming';

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#1C1A1A',
        tabBarStyle: {backgroundColor: '#C70039'},
        tabBarLabelStyle: {fontWeight: '800'},
      }}>
      <Tab.Screen
        name="Airing"
        component={AnimeAiring}
        options={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="Complete"
        component={AnimeComplete}
        options={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
        }}
      />

      <Tab.Screen
        name="Upcoming"
        component={AnimeUpcoming}
        options={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
