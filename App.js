import { View } from 'react-native'
import React, { useEffect } from 'react'
import Splash from './src/screens/auth/Splash/Splash'
import SignUp from './src/screens/auth/SignUp/SignUp'

const WEB_CLIENT_ID = '214531408203-eapfobjh5ju1ut11m80na9q5vtdhk99t.apps.googleusercontent.com';
const IOS_CLIENT_ID = '214531408203-23rjb0nsphmveakpfh9himagnrie0cce.apps.googleusercontent.com'

const App = () => {
  useEffect(() => {

  }, [])
  return (
    <View>
      <SignUp />
    </View>
  )
}

export default App

