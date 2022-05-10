import React from 'react'
import { Text, View } from 'react-native';

import st from './SettingsScreenStyles'
import global from '../../theme/GlobalStyles'


const SettingsScreen = () => {
    return (
        <View style={global.body}>
            <Text style={global.h1}>SettingsScreen</Text>
        </View>
    )
}

export default SettingsScreen;