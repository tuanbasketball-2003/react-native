import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Profile)

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})