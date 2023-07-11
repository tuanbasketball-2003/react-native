import AsyncStorage from "@react-native-async-storage/async-storage";
import request from "./request"
export const login = async (values) => {

    try {
        const response = await request({
            url: '/user/login',
            method: 'post',
            data: values
        })
        // console.log("Check response backend>>>", response);
        if (response?.data?.token) {
            await AsyncStorage.setItem('auth_token', response?.data?.token);
            return response?.data?.token;
        }
    } catch (error) {
        // console.log('e response >>>>>>', error?.response)

        console.log('e login >>>>>>', error)
    }
}

export const singup = async (values) => {
    try {
        const response = await request({
            url: '/user/register',
            method: 'post',
            data: values,
        })
        if (response) {
            const { email, password } = values;
            const loginResponse = await login({ email, password });
            console.log('loginResponse>>>>', loginResponse)
            return loginResponse;
        }
    } catch (error) {
        // console.log('e response singup >>>>>>', error?.response)

        console.log(">>>>> Error signup", error);
    }
}