import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/color'

const Input = ({ placeholder, label, isPassword }) => {

    const [isPasswordVisible, setIsPassWordVisible] = useState(false)

    const onEyePress = () => {
        setIsPassWordVisible(!isPasswordVisible)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={{ marginHorizontal: 16 }} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_close.png')} />
                    </Pressable>
                ) : null}
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14

    },
    inputContainer: {
        borderWidth: 2,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },

})