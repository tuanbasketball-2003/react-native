import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../../components/AuthHeader/autheHeader'
import Input from '../../../components/Input/input'
import CheckBox from '../../../components/CheckBox/CheckBox'
import { colors } from '../../../utils/color'
import Button from '../../../components/Button/button'
import Seperator from '../../../components/Seperator/Seperator'
import GoogleLogin from '../../../components/GoogleLogin/GoogleLogin'

const SignIn = () => {

    const [checked, setChecked] = useState(false)
    const onSingup = () => {
        console.log('Xin chao')

    }
    return (

        <ScrollView style={styles.container}>
            <AuthHeader title={'Sign Up'} />
            <Input label='Name' placeholder="Jone Name" />
            <Input label='E-mail' placeholder="example@gmail.com" />
            <Input isPassword label='Password' placeholder="************" />

            <View style={styles.agrreRow}>
                <CheckBox checked={checked} onCheck={setChecked} />
                <Text style={styles.agrreText}>I agree with <Text style={styles.agrreTextBold}>Terms </Text>&<Text style={styles.agrreTextBold}> Privacy</Text> </Text>
            </View>
            <Button style={styles.button} title='Sign Up' />
            <Seperator text='Or sign up with' />

            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text onPress={onSingup} style={styles.footerLink}> Sign In</Text>
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