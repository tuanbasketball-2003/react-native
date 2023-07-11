import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthHeader from '../../../components/AuthHeader/autheHeader'
import Input from '../../../components/Input/input'
import CheckBox from '../../../components/CheckBox/CheckBox'
import { colors } from '../../../utils/color'
import Button from '../../../components/Button/button'
import Seperator from '../../../components/Seperator/Seperator'
import GoogleLogin from '../../../components/GoogleLogin/GoogleLogin'
import request from '../../../utils/request'
import { singup } from '../../../utils/backedCalls'
import { UserContext } from '../../../../App'

const SignUp = ({ navigation }) => {

    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({});

    const { setUser } = useContext(UserContext)

    const onSignin = () => {
        navigation.navigate('SignIn')
    }

    const goBack = () => {
        navigation.goBack()
    }

    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }))
        // console.log("Check key singup", key);
        // console.log("Check value singup", value);
    }

    const onsubmit = async () => {
        try {
            if (!values?.fullName || !values.email || !values?.password || !values.confirmPassword) {
                Alert.alert('All fields are required');
                return;
            }

            if (!checked) {
                Alert.alert('Passwords do not match');
                return;
            }

            if (values?.password !== values.confirmPassword) {
                Alert.alert('Passwords do not match');
                return;
            }
            const token = await singup(values);
            setUser({ token })
            console.log("Check token signup>>>>", token);
        } catch (error) {
            console.log("Check error SignUp >>>", error);
        }

    }

    return (

        <ScrollView style={styles.container}>
            <AuthHeader onBackPress={goBack} title='Sign Up' />
            <Input value={values.fullName} onChangeText={(v) => onChange('fullName', v)} label='Name' placeholder="Jone Name" />
            <Input value={values.email} onChangeText={(v) => onChange('email', v)} label='E-mail' placeholder="example@gmail.com" />
            <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword label='Password' placeholder="************" />
            <Input value={values.confirmPassword} onChangeText={(v) => onChange('confirmPassword', v)} isPassword label=' Confirm Password' placeholder="************" />

            <View style={styles.agrreRow}>
                <CheckBox checked={checked} onCheck={setChecked} />
                <Text style={styles.agrreText}>I agree with <Text style={styles.agrreTextBold}>Terms </Text>&<Text style={styles.agrreTextBold}> Privacy</Text> </Text>
            </View>
            <Button onPress={onsubmit} style={styles.button} title='Sign Up' />
            <Seperator text='Or sign up with' />

            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text onPress={onSignin} style={styles.footerLink}> Sign In</Text>
            </Text>
        </ScrollView>
    )
}

export default React.memo(SignUp)

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