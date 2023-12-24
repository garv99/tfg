import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { styles } from './ScheduleScreen.styles'
import { TeamState } from '../../redux/reducers/teamReducer';
import { TextInput } from 'react-native-paper';
import CustomButton from '../../components/CustomButton/CustomButton';
import { SelectList } from 'react-native-dropdown-select-list';
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent';
import { ScreenConstants } from '../../constants/Strings';
import { NavigationConstants } from '../../navigation/NavigationConstants';
import { Match, addMatch } from '../../redux/actions/MatchesAction';
import uuid from 'react-native-uuid';
import { clearTeams } from '../../redux/actions/teamAction';

const ScheduleScreen = () => {
    const dispatch = useDispatch<any>();
    const teamReducer: TeamState = useSelector((state: any) => state.teamReducer);
    const [city, setCity] = useState('');
    const [ground, setGround] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = React.useState("");
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const navigation: any = useNavigation();

    //can be taken from api according to different dates.
    const availableTimeSlotData = [
        { key: '1', value: '3PM - 5PM' },
        { key: '2', value: '10AM - 11AM' },
    ]

    const ScheduleMatchBtnHandler = () => {
        dispatch(clearTeams())
        const payload: Match = {
            id: uuid.v4(),
            city: city,
            ground: ground,
            date: selectedDate,
            time_slot: selectedTimeSlot,
            team_A_name: teamReducer?.teamA?.name,
            team_B_name: teamReducer?.teamB?.name,
        }
        dispatch(addMatch(payload));
        Alert.alert(ScreenConstants.MATCH_SCHEDULED);
        navigation.navigate(NavigationConstants.HOME);
    }

    return (
        <View style={styles.parentContainer}>
            <View style={styles.teamsContainer}>
                <Image
                    style={styles.teamImage}
                    source={teamReducer?.teamA?.image} />
                <Image
                    style={styles.vsImage}
                    source={require('../../assets/vsImage.jpg')} />
                <Image
                    style={styles.teamImage}
                    source={teamReducer?.teamB?.image} />
            </View>
            <TextInput
                label="City/Town"
                mode='outlined'
                value={city}
                onChangeText={(text) => setCity(text)}
                style={styles.textInput}
            />
            <TextInput
                label="Ground"
                mode='outlined'
                value={ground}
                onChangeText={(text) => setGround(text)}
                style={styles.textInput}
            />
            <TextInput
                label="Date"
                mode='outlined'
                value={selectedDate}
                onPressIn={() => { setCalendarVisible(true) }}
                editable={false}
                style={styles.textInput}
            />
            <CalendarComponent
                isVisible={isCalendarVisible}
                setVisible={setCalendarVisible}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate} />
            <SelectList
                boxStyles={styles.textInput}
                search={false}
                placeholder={ScreenConstants.AVAILABLE_TIME_SLOTS}
                setSelected={(val: any) => setSelectedTimeSlot(val)}
                data={availableTimeSlotData}
                save="value"
            />
            {city && ground && selectedDate && selectedTimeSlot && <CustomButton title={ScreenConstants.SCHEDULE_MATCH} onPress={() => {
                ScheduleMatchBtnHandler()
            }} />}
        </View>
    )
}

export default ScheduleScreen