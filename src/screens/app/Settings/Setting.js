import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Setting = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Settings</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Setting)

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})