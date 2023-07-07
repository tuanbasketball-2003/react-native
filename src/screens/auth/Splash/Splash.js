import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../../components/Button/button'
import { colors } from '../../../utils/color'

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerText]}> All you need </Text>
                <Text style={styles.title}> here!!</Text>
            </View>
            <Button
                title='Sign Up'
            />

            <Pressable hitSlop={20}>
                <Text style={styles.footerText}>Sing In</Text>
            </Pressable>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    titleContainer: {
        marginVertical: 50
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center'
    },
    innerText: {
        color: colors.orange,
        textDecorationLine: 'underline'
    },
    image: {
        width: "100%",
        height: 200
    },
    footerText: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30
    }
})