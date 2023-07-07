import { View } from 'react-native'
import React, { useEffect } from 'react'
import Splash from './src/screens/auth/Splash/Splash'
import SignUp from './src/screens/auth/SignUp/SignUp'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const WEB_CLIENT_ID = '214531408203-eapfobjh5ju1ut11m80na9q5vtdhk99t.apps.googleusercontent.com';
const IOS_CLIENT_ID = '214531408203-23rjb0nsphmveakpfh9himagnrie0cce.apps.googleusercontent.com'

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)

    });
  }, [])
  return (
    <View>
      <SignUp />
    </View>
  )
}

export default App

