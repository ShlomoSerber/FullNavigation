import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PersonScreen from '../screens/PersonScreen/PersonScreen';


export type StackScreens = {
	HomeScreen: undefined,
    PersonScreen: {
        name: string
    }
}

const Stack = createStackNavigator<StackScreens>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PersonScreen" component={PersonScreen} />
        </Stack.Navigator>
    );
}