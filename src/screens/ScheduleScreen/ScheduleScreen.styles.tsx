import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },

    teamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: Colors.lightBlue,
    },
    teamImage: {
        width: 120,
        height: 120,
        marginVertical: '10%',
        borderRadius: 500,
        borderWidth: 4,
        borderColor: Colors.lightBlue,
    },
    vsImage: {
        width: 60,
        height: 60,
        marginVertical: '10%',
    },
    textInput: {
        marginVertical: 10,
    },
})
