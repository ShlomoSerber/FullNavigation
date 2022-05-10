import React from 'react'
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import st from './FloatingTextButtonStyles'

// The interface for the available props:
interface Props {
    title: string,
    style?: StyleProp<ViewStyle>,
    titleStyle?: StyleProp<TextStyle>,
    absolutePosition?: {top?: number, bottom?: number, left?: number, right?: number},
    onPress?: ((event: GestureResponderEvent) => void),
}

const FloatingTextButton = (props: Props) => {
// A TouchableOpacity button with basic default styles and a text title
// ! Note on the position prop: it's defined based on the parent component (with the position:absolute style) so if used, this component should be placed directly below a component that includes the entire screen

    return (
        <TouchableOpacity 
            // It has a default style from the FloatingButtonStyles.tsx file. Optionaly, it's position can be modified or it can be passed a new styles object
            activeOpacity={0.6}
            style={[
                st.button,
                {
                    position: props.absolutePosition === undefined ? "relative" : "absolute",
                    top: props.absolutePosition?.top,
                    bottom: props.absolutePosition?.bottom,
                    left: props.absolutePosition?.left,
                    right: props.absolutePosition?.right,
                },
                props.style
            ]}
            // Directly passes to onPress whatever it got from the props.onPress prop
            onPress={props.onPress}
        >
            <Text
            // Also has a native style that can be modified from the titleStyle prop
            style={[st.buttonText, props.titleStyle]}>{props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default FloatingTextButton;