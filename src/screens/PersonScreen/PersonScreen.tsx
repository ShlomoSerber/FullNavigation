import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { StackScreens } from '../../navigation/StackNavigator';
import st from './PersonScreenStyles'
import global from '../../theme/GlobalStyles'


interface Props extends StackScreenProps<StackScreens, "PersonScreen"> {}

const PersonScreen = (props: Props) => {

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.name
        })
    }, [])

    return (
        <View style={global.body}>
            <Text style={global.h1}>{`Welcome ${props.route.params.name}!`}</Text>
        </View>
    )
}

export default PersonScreen;