import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './SelectTeamScreen.styles'
import { ScreenConstants } from '../../constants/Strings'
import CustomButton from '../../components/CustomButton/CustomButton'
import SelectTeamModal from '../../components/SelectTeamModal/SelectTeamModal'
import { useSelector } from 'react-redux'
import { TeamState } from '../../reducers/teamReducer'

const SelectTeamScreen = () => {
    // Reducers
    const teamReducer: TeamState = useSelector((state: any) => state.teamReducer);
    //0 for team A and 1 for team B
    const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.parentContainer}>
            {teamReducer?.teamA?.name?.length < 1 ?
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                        setSelectedTeamIndex(0);
                    }}
                    style={styles.addContainer}>
                    <Text>+</Text>

                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                        setSelectedTeamIndex(0);
                    }}>
                    <Image
                        style={styles.teamImage}
                        source={teamReducer?.teamA?.image} />
                </TouchableOpacity>
            }

            <Text>{teamReducer?.teamA?.name?.length > 1 ? teamReducer?.teamA?.name : ScreenConstants.SELECT_TEAM_A}</Text>
            <Image
                style={styles.vsImage}
                source={require('../../assets/vsImage.jpg')} />
            {teamReducer?.teamB?.name?.length < 1 ?
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                        setSelectedTeamIndex(1);
                    }}
                    style={styles.addContainer}>
                    <Text>+</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                        setSelectedTeamIndex(1);
                    }}>
                    <Image
                        style={styles.teamImage}
                        source={teamReducer?.teamB?.image} />
                </TouchableOpacity>
            }
            <Text>{teamReducer?.teamB?.name?.length > 1 ? teamReducer?.teamB?.name : ScreenConstants.SELECT_TEAM_B}</Text>
            <SelectTeamModal selectedTeamIndex={selectedTeamIndex} isVisible={isModalVisible} setVisible={setModalVisible} />
            {teamReducer?.teamA?.name && teamReducer?.teamB?.name && <CustomButton title={ScreenConstants.NEXT} onPress={undefined} />}
        </View>
    )
}

export default SelectTeamScreen