import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color';

const Button = ({ title, onPress, style }) => {
    // console.log("INSIDE BUTTON");

    return (
        //Button Sign Up
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[style, styles.container]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>

    )
}

export default React.memo(Button)

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        width: '100%'

    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})