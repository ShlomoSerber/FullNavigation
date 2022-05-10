import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { DrawerNavigator } from './DrawerNavigator';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import FriendsScreen from '../screens/FriendsScreen/FriendsScreen';


const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
    </Tab.Navigator>
  );
}