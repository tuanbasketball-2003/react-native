import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color'

const { width } = Dimensions.get('window')
// console.log("CHeck width ", width);
const FavoritesItem = ({ title, onPress, image, price }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>

            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image style={styles.icon} source={require('../../assets/close.png')} />
        </Pressable>
    )
}

export default React.memo(FavoritesItem)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: colors.boderColor,
        flexDirection: 'row',

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 20
    },
    content: {
        flex: 1
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8
    },
    price: {
        color: colors.black,
        fontWeight: 'bold',
        marginBottom: 5
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 8
    }

})