import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color'

const EditableBox = ({ label, value, editable, onPress, style, onChangeText }) => {
    return (
        <View onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} />
        </View>
    )
}

export default EditableBox
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 5,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4
    },
    label: {
        color: colors.grey,
        fontSize: 12,
    },
    input: {
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500'
    },

})