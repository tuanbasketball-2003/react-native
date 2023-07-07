import { TouchableOpacity, StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color';

const AuthHeader = ({ title, onBackPress }) => {


    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/auth_back.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>


    )
}

export default AuthHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50
    },
    image: {
        width: 20,
        height: 20
    },
    title: {
        color: colors.blue,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16
    },
})