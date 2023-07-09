import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color'

const ListItem = ({ title, subtitle, onPress, style }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, style]}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {!!subtitle ? (
                    <Text style={styles.subtitle}>{subtitle}</Text>
                ) : null}
            </View>
            <Image style={styles.arrowRight} source={require('../../assets/arrow_right.png')} />
        </Pressable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 5,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4
    },
    content: {

    },
    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.grey,
        marginTop: 6,
        fontSize: 12
    },
    arrowRight: {
        width: 30,
        height: 30
    }

})