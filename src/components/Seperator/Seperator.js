import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color'

const Seperator = ({ text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line}></View>
        </View>
    )
}

export default Seperator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.grey
    },
    text: {
        color: colors.blue,
        fontWeight: '500'
    }
})