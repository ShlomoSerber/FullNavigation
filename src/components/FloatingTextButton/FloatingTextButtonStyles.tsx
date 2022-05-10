import { StyleSheet } from "react-native";

const FloatingButtonStyles = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#3563E8",
        borderRadius: 100,
        shadowColor: "#000000",
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
    }
})

export default FloatingButtonStyles;