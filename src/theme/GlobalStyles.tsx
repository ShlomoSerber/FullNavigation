import React from 'react'
import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "flex-start"
    },
    h1: {
        margin: 5,
        fontSize: 28,
        color: "#000000"
    },
    textButton: {
        margin: 5,
        padding: 5,
        borderRadius: 0,
        minWidth: 100
    }
});

export default GlobalStyles;