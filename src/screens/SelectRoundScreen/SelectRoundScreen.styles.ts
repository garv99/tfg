import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.white,
    },
    roundContainer: {
        backgroundColor: Colors.lightBlue,
        marginVertical: 7,
        padding: 14,
        paddingStart: 20,
        borderRadius: 20,
    },
    activeRoundContainer: {
        backgroundColor: Colors.lightBlue,
        marginVertical: 7,
        padding: 14,
        paddingStart: 20,
        borderRadius: 20,
        borderColor: Colors.darkBlue,
        borderWidth: 2,
    },
    roundText: {
        fontSize: 18,
    },
    headingText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.darkBlue,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 20,
    },
    subHeadingText: {
        fontSize: 14,
        color: Colors.gray,
        marginBottom: 10,
        marginTop: 30,
    },
})