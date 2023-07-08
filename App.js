import React, { useEffect } from 'react'
import Splash from './src/screens/auth/Splash/Splash'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/color';
import SignUp from './src/screens/auth/SignUp/SignUp';
import SignIn from './src/screens/auth/SignIn/SignIn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home/Home';
import Profile from './src/screens/app/Profile/Profile';
import Favorites from './src/screens/app/Favorites/Favorites';
import { Image } from 'react-native';
import ProductDetail from './src/screens/app/ProductDetail/ProductDetail';

const WEB_CLIENT_ID = '214531408203-eapfobjh5ju1ut11m80na9q5vtdhk99t.apps.googleusercontent.com';
const IOS_CLIENT_ID = '214531408203-23rjb0nsphmveakpfh9himagnrie0cce.apps.googleusercontent.com';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Tabs = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let icon;

      if (route.name === 'Home') {
        icon = focused
          ? require('./src/assets/tabs/home_active.png')
          : require('./src/assets/tabs/home.png');
      } else if (route.name === 'Profile') {
        icon = focused
          ? require('./src/assets/tabs/profile_active.png')
          : require('./src/assets/tabs/profile.png');
      } else if (route.name === 'Favorite') {
        icon = focused
          ? require('./src/assets/tabs/bookmark_active.png')
          : require('./src/assets/tabs/bookmark.png');
      }

      // You can return any component that you like here!
      return <Image style={{ width: 25, height: 25 }} source={icon} />
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { borderTopColor: colors.lightGrey },

  })}>
    <Tab.Screen name='Home' component={Home} />
    <Tab.Screen name='Favorite' component={Favorites} />
    <Tab.Screen name='Profile' component={Profile} />
  </Tab.Navigator>
)

const App = () => {
  const isSignedIn = true;

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)

    });
  }, [])

  const theme = {
    colors: {
      background: colors.white
    }
  }
  // Khắc phục sự cố khu vực an toàn dùng : SafeAreaProvider của react-navigation-safe-area 
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="ProductDetails" component={ProductDetail} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
              <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}

export default App

