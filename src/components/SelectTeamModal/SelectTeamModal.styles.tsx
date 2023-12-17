import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    parentContainer: {
        margin: 0,
    },

    bottomSheetContainer: {
        width: '100%',
        marginHorizontal: 0,
        borderRadius: 25,
        padding: 0,
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        paddingBottom: 50,
        backgroundColor: Colors.white,
    },
    teamContainer: {
        marginHorizontal: 40,
        marginTop: 20,
    },
    divider: {
        width: 50,
        height: 3,
        marginVertical: 10,
        backgroundColor: Colors.gray,
        alignSelf: 'center',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    teamName: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.darkBlue,
    },
})
