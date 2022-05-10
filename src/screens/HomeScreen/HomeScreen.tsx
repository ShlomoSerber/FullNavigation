import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { StackScreens } from '../../navigation/StackNavigator';
import st from './HomeScreenStyles'
import global from '../../theme/GlobalStyles'
import FloatingTextButton from '../../components/FloatingTextButton/FloatingTextButton';


interface Props extends StackScreenProps<StackScreens, "HomeScreen"> {}

const HomeScreen = (props: Props) => {

    const [names, setNames] = useState<string[]>([
        "Fernando",
        "Carlos",
        "Martin"
    ])

    return (
        <View style={global.body}>
            <Text style={global.h1}>HomeScreen</Text>
            {
                names.map((name, index) => 
                    <FloatingTextButton
                        key={index}
                        title={name}
                        style={global.textButton}
                        onPress={() => props.navigation.navigate("PersonScreen", {name: name})}
                    />
                )
            }
        </View>
    )
}

export default HomeScreen;