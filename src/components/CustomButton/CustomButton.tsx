import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './CustomButton.styles'

interface ICustomButton {
    title: string,
    onPress: any
}
const CustomButton = (props: ICustomButton) => {
    return (
        <TouchableOpacity onPress={props?.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{props?.title}</Text>
        </TouchableOpacity>)
}

export default CustomButton