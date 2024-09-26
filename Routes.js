import React, { useContext, useEffect, useState } from 'react'
import Splash from './src/screens/auth/Splash/Splash'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/color';
import SignUp from './src/screens/auth/SignUp/SignUp';
import SignIn from './src/screens/auth/SignIn/SignIn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home/Home';
import Profile from './src/screens/app/Profile/Profile';
import Favorites from './src/screens/app/Favorites/Favorites';
import { Image } from 'react-native';
import ProductDetail from './src/screens/app/ProductDetail/ProductDetail';
import Setting from './src/screens/app/Settings/Setting';
import CreateListin from './src/screens/app/CreateListin/CreateListin';
import MyListings from './src/screens/app/MyListings/MyListings';
import { UserContext } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTokenToAxios } from './src/utils/request';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='Settings' component={Setting} options={{ headerShown: false }} />
            <Stack.Screen name='CreateListing' component={CreateListin} options={{ headerShown: false }} />
            <Stack.Screen name='MyListings' component={MyListings} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Tabs = () => (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === 'Home') {
                icon = focused
                    ? require('./src/assets/tabs/home_active.png')
                    : require('./src/assets/tabs/home.png');
            } else if (route.name === 'ProfileStack') {
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
        <Tab.Screen name='ProfileStack' component={ProfileStack} />
    </Tab.Navigator>
)

const Route = () => {
    const [loading, setLoading] = useState(true);
    const { user, setUser } = useContext(UserContext);
    // console.log("Check user routes context >>>>>", user);

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('auth_token');
            setUser({ token });

            setTimeout(() => {
                setLoading(false);
            }, 1000);
        })()
    }, [])


    useEffect(() => {
        if (user?.token) {
            addTokenToAxios(user?.token);
        }
    }, [user])

    const theme = {
        colors: {
            background: colors.white,
        }
    }

    if (loading) {
        return null;
    }
    // Khắc phục sự cố khu vực an toàn dùng : SafeAreaProvider của react-navigation-safe-area 
    return (

        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                {user?.token ? (
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


    )
}

export default React.memo(Route)

