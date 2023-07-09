import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header/Header'
import { colors } from '../../../utils/color'
import ListItem from '../../../components/ListItem/ListItem'
import Button from '../../../components/Button/button'

const Profile = ({ navigation }) => {
    const number = 10;

    const onLogout = () => {
        console.log('Log out clicked')
    }

    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    const onNewListingPress = () => {
        navigation.navigate('CreateListing')
    }

    const onMyListingPress = () => {
        navigation.navigate('MyListings')

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Profile" showLogout onLogout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email</Text>

                    <ListItem onPress={onMyListingPress} title="My Listings" subtitle={`Already have ${number} listing`} />
                    <ListItem onPress={onSettingsPress} title="Settings" subtitle="Account, FAQ, Contact" />
                </View>
                <Button onPress={onNewListingPress} style={{ flex: 0 }} title="Add New Listing" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    content: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: 12,
    },
    email: {
        fontSize: 14,
        color: colors.grey,
        marginBottom: 16
    },
    button: {
        flex: 0
    }
})