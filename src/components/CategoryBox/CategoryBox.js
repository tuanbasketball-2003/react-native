import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color'

const CategoryBox = ({ title, onPress, image, isFirst, isSelected }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, isFirst ? { marginLeft: 24 } : {}]}>

            <View style={[styles.imageContainer, isSelected ? { backgroundColor: colors.black } : {}]}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={[styles.title, isSelected ? { color: colors.blue, fontWeight: '500' } : {}]}>{title}</Text>
        </Pressable>
    )
}

export default React.memo(CategoryBox)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 15
    },
    imageContainer: {
        backgroundColor: colors.lightGrey,
        padding: 8,
        borderRadius: 8,
        paddingBottom: 8
    },
    image: {
        width: 32,
        height: 32,
    },
    title: {
        color: colors.grey
    },

})