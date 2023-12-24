import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { useDispatch } from 'react-redux';
import { ScreenConstants } from '../../constants/Strings'
import { saveTeamA, saveTeamB } from '../../redux/actions/teamAction';
import { styles } from './SelectTeamModal.styles'

interface ISelectTeamModal {
    isVisible: boolean,
    setVisible: (arg0: boolean) => void,
    selectedTeamIndex: any,

}
const teams = [
    { title: 'Gold', image: require('../../assets/teamImages/teamA.png') },
    { title: 'Platinum', image: require('../../assets/teamImages/teamB.png') },
    { title: 'Bombay Sixers', image: require('../../assets/teamImages/teamC.png') },
    { title: 'Chennai Stars', image: require('../../assets/teamImages/teamD.png') },
]
const SelectTeamModal = (props: ISelectTeamModal) => {
    const dispatch = useDispatch<any>();
    return (
        <ReactNativeModal
            isVisible={props?.isVisible}
            style={styles.parentContainer}
            swipeDirection="down"
            onSwipeComplete={() => props?.setVisible(false)}
            onBackdropPress={() => { props?.setVisible(false) }}
        >
            <View style={styles.bottomSheetContainer}>
                <View style={styles.divider} />
                <Text style={styles.teamName}>{ScreenConstants.TOURNAMENT_TEAMS}</Text>
                <FlatList
                    numColumns={2}
                    data={teams}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.teamContainer} onPress={() => {
                            props?.setVisible(false);
                            props?.selectedTeamIndex === 0 ?
                                dispatch(saveTeamA(item?.title, item?.image)) : dispatch(saveTeamB(item?.title, item?.image))
                        }} >
                            <Image
                                style={styles.image}
                                source={item?.image}
                            />
                            <Text style={styles.teamName}>{item?.title}</Text>
                        </TouchableOpacity>
                    )}
                >
                </FlatList>
            </View>
        </ReactNativeModal>
    )
}

export default SelectTeamModal