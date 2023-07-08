import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color'

const { width } = Dimensions.get('window')
// console.log("CHeck width ", width);
const PrductHomeItem = ({ title, onPress, image, price }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>

            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    )
}

export default React.memo(PrductHomeItem)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8
    },
    image: {
        width: (width - 60) / 2,
        height: 200,
        borderRadius: 8,
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8
    },
    price: {
        color: colors.black,
        fontWeight: 'bold',
        marginBottom: 5
    }

})