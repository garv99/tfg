import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import ReactNativeModal from 'react-native-modal';
import { styles } from '../CustomButton/CustomButton.styles';

interface ICalendar {
    isVisible: boolean,
    setVisible: any,
    selectedDate: any,
    setSelectedDate: any,
}

const CalendarComponent = (props: ICalendar) => {

    return (
        <ReactNativeModal
            isVisible={props?.isVisible}
            swipeDirection="down"
            onSwipeComplete={() => props?.setVisible(false)}
            onBackdropPress={() => { props?.setVisible(false) }}
        >
            <Calendar
                onDayPress={day => {
                    props?.setSelectedDate(day.dateString);
                    props?.setVisible(false);
                }}
                markedDates={{
                    [props?.selectedDate]: { selected: true, disableTouchEvent: true }
                }}
            />
        </ReactNativeModal>
    );
};

export default CalendarComponent;