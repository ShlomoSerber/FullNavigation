import 'react-native-gesture-handler';
import React from 'react'
import Animated from 'react-native-reanimated';

import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import { StackNavigator } from './src/navigation/StackNavigator';
import { SafeAreaView } from 'react-native';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { TopTabNavigator } from './src/navigation/TopTabNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <TopTabNavigator />
        </NavigationContainer>
    )
}

export default App;