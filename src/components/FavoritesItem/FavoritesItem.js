import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color'

const { width } = Dimensions.get('window')
// console.log("CHeck width ", width);
const FavoritesItem = ({ title, onPress, icon, image, price, onIconPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>

            <Image style={styles.image} source={{ uri: `https://listicle.deegeehub.com/api/${image?.path}` }} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Pressable onPress={onIconPress}>
                <Image style={styles.icon} source={icon || require('../../assets/close.png')} />
            </Pressable>

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
        marginRight: 20,
        backgroundColor: colors.lightGrey
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