import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color';

const GoogleLogin = () => {


    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>

    )
}

export default React.memo(GoogleLogin)

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        borderRadius: 8,
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 14
    },
    image: {
        width: 30,
        height: 30
    }

})