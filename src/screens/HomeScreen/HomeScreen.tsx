import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScreenConstants } from '../../constants/Strings'
import { styles } from './HomeScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { NavigationConstants } from '../../navigation/NavigationConstants'

const HomeScreen = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.parentContainer}>
            <Text style={styles.headingText}>{ScreenConstants.TFS_HEADING}</Text>
            <TouchableOpacity
                onPress={() => { navigation.navigate(NavigationConstants.SELECT_ROUND) }}
                style={styles.listContainer}
            >
                <Text style={styles.listText}>Schedule Match</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listContainer}
                onPress={() => { navigation.navigate(NavigationConstants.MATCH_LIST) }}
            >
                <Text style={styles.listText}>View Scheduled Matches</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen