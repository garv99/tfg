import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: '20%'
    },
    vsImage: {
        width: 100,
        height: 100,
        marginVertical: '10%',
    },
    teamImage: {
        width: 100,
        height: 100,
        marginVertical: '10%',
        borderRadius: 500,
        borderWidth: 4,
        borderColor: Colors.lightBlue,
    },
    addContainer: {
        backgroundColor: Colors.lightBlue,
        paddingHorizontal: 55,
        paddingVertical: 50,
        borderRadius: 100,
        marginBottom: 20,
    },
})
