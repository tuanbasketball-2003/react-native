import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header/Header'
import { colors } from '../../../utils/color'
import { launchImageLibrary } from 'react-native-image-picker';

const CreateListin = ({ navigation }) => {

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing" />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload Photos</Text>
                <TouchableOpacity>
                    <Text>+</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListin)

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 14,
        color: colors.blue,
        marginBottom: 16
    },

})