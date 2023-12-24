import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton'
import { ScreenConstants } from '../../constants/Strings'
import { NavigationConstants } from '../../navigation/NavigationConstants'
import { useNavigation } from '@react-navigation/native'
import { styles } from './SelectRoundScreen.styles'

//can be taken from api
const data = [
    { title: 'League Matches', key: 'item1' },
    { title: 'Quarter Final', key: 'item2' },
    { title: 'Semi Final', key: 'item3' },
    { title: 'Final', key: 'item4' },
]

const SelectRoundScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigation: any = useNavigation();
    return (
        <View style={styles.parentContainer}>
            <Text style={styles.subHeadingText}>{ScreenConstants.SELECT_ROUND}</Text>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => { setSelectedIndex(index) }} style={selectedIndex === index ? styles.activeRoundContainer : styles.roundContainer}>
                        <Text style={styles.roundText}>{item?.title}</Text>
                    </TouchableOpacity>
                )}
            />
            <CustomButton title={ScreenConstants.NEXT} onPress={() => navigation.navigate(NavigationConstants.SELECT_TEAM)} />
        </View>
    )
}

export default SelectRoundScreen