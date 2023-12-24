import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: Colors.white,
        flex: 1,
        padding: 20,
    },
    cardContainer: {
        borderRadius: 15,
        borderWidth: 0.3,
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.darkBlue,
        backgroundColor: Colors.lightBlue
    },
    upcomingContainer: {
        backgroundColor: Colors.orange,
        padding: 5,
        borderRadius: 10,
    },
    deleteContainer: {
        backgroundColor: Colors.red,
        padding: 5,
        borderRadius: 10,
    },
    rightContainer: {
        justifyContent: 'space-between',
    },
    upcomingText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    divider: {
        borderWidth: 0.3,
        marginVertical: 10,
        borderColor: Colors.gray
    },
    heading: {
        color: Colors.darkBlue,
        fontSize: 18,
        fontWeight: 'bold',
    }
})
