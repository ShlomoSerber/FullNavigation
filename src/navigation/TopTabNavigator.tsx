import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { BottomTabNavigator } from './BottomTabNavigator';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
            <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
		</Tab.Navigator>
	);
}