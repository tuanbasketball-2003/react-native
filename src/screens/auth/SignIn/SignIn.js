import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../../components/AuthHeader/autheHeader'
import Input from '../../../components/Input/input'
import CheckBox from '../../../components/CheckBox/CheckBox'
import { colors } from '../../../utils/color'
import Button from '../../../components/Button/button'
import Seperator from '../../../components/Seperator/Seperator'
import GoogleLogin from '../../../components/GoogleLogin/GoogleLogin'

const SignIn = ({ navigation }) => {
    console.log(navigation);
    const onSingup = () => {
        navigation.navigate('SignUp')
    }

    const onBack = () => {
        navigation.goBack();
    }
    return (

        <ScrollView style={styles.container}>
            <AuthHeader onBackPress={onBack} title={'Sign Up'} />
            <Input label='E-mail' placeholder="example@gmail.com" />
            <Input isPassword label='Password' placeholder="************" />


            <Button style={styles.button} title='Sign Up' />
            <Seperator text='Or sign up with' />

            <GoogleLogin />
            <Text style={styles.footerText}>Don’t have an account?
                <Text onPress={onSingup} style={styles.footerLink}> Sign Up</Text>
            </Text>
        </ScrollView>
    )
}

export default React.memo(SignIn)

const styles = StyleSheet.create({

    container: {
        padding: 25,
    },
    agrreRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agrreText: {
        color: colors.blue,
        marginHorizontal: 13
    },
    agrreTextBold: {
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 20
    },
    footerText: {
        color: colors.blue,
        marginBottom: 50,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
})