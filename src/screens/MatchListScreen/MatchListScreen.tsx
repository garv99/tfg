import React from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './MatchListScreen.styles'
import { ScreenConstants } from '../../constants/Strings'
import { useDispatch, useSelector } from 'react-redux'
import { Match, removeMatch } from '../../redux/actions/MatchesAction'

const MatchListScreen = () => {

    const dispatch = useDispatch<any>();
    const matchesReducer: Match[] = (useSelector((state: any) => state.matchesReducer))?.matches;

    const deleteMatch = (id: string) => {
        Alert.alert(ScreenConstants.DELETE_ALERT, '', [
            {
                text: ScreenConstants.CANCEL,
                onPress: () => console.log('Cancel Pressed'),
            },
            {
                text: ScreenConstants.DELETE,
                onPress: () => dispatch(removeMatch(id))
            },
        ]);
    }

    return (
        <View style={styles.parentContainer}>
            <Text style={styles.heading}>{ScreenConstants.SCHEDULED_MATCHES}</Text>
            <FlatList
                data={matchesReducer}
                renderItem={({ item, index }) => (
                    <View style={styles.cardContainer}>
                        <View>
                            <Text>{item?.ground},{item?.city}</Text>
                            <View style={styles.divider} />
                            <Text>TEAM A: {item?.team_A_name}</Text>
                            <Text>TEAM B: {item?.team_B_name}</Text>
                            <View style={styles.divider} />
                            <Text>{ScreenConstants.MATCH_SCHEDULED_ON}: {item?.date}</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <View style={styles.upcomingContainer}>
                                <Text style={styles.upcomingText}>{ScreenConstants.UPCOMING}</Text>
                            </View>
                            <TouchableOpacity onPress={() => deleteMatch(item?.id)} style={styles.deleteContainer}>
                                <Text style={styles.upcomingText}>{ScreenConstants.DELETE}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default MatchListScreen