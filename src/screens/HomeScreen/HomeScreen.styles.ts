import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.white,
    },
    headingText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.darkBlue,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 20,
    },
    listContainer: {
        backgroundColor: Colors.darkBlue,
        height: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    listText: {
        fontSize: 18,
        color: Colors.white,
    }
})