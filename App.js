import React, { useEffect, useState } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Routes';

const WEB_CLIENT_ID = '214531408203-eapfobjh5ju1ut11m80na9q5vtdhk99t.apps.googleusercontent.com';
const IOS_CLIENT_ID = '214531408203-23rjb0nsphmveakpfh9himagnrie0cce.apps.googleusercontent.com';

export const UserContext = React.createContext();
export const ProfileContext = React.createContext();
export const ServicesContext = React.createContext([]);

const App = () => {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [services, setServices] = useState();

  console.log('user app state>>>>', user)
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)

    });
  }, [])

  // Khắc phục sự cố khu vực an toàn dùng : SafeAreaProvider của react-navigation-safe-area 
  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <ProfileContext.Provider value={{ profile, setProfile }}>
          <ServicesContext.Provider value={{ services, setServices }}>
            <Routes />
          </ServicesContext.Provider>
        </ProfileContext.Provider>
      </UserContext.Provider>
    </SafeAreaProvider>

  )
}

export default App

