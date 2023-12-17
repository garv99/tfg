import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: Colors.darkBlue,
        marginBottom: 30,
        borderRadius: 10,
        padding: 16,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 18,
    }
})
