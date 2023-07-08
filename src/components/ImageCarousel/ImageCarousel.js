import { TouchableOpacity, StyleSheet, View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/color';

const ImageCarousel = ({ images }) => {

    const [activeIndex, setActionIndex] = useState(0);
    // console.log(images);
    const handleScrollEnd = (e) => {
        // console.log('e', e.nativeEvent)
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(horizontalOffset / width);
        console.log('index', index);
        setActionIndex(index)
    }

    const renderImage = ({ item }) => {
        return (
            <Image style={styles.image} source={{ uri: item }} />
        )
    }

    return (
        <View>
            <FlatList horizontal pagingEnabled style={styles.list} data={images} renderItem={renderImage} onMomentumScrollEnd={handleScrollEnd} />
            <View style={styles.pagination}>
                {images.map((_, index) => {
                    return (
                        <View key={index} style={[styles.paginationLine, index === activeIndex ? styles.activeLine : {}]} />
                    )
                })}
            </View>
        </View>
    )
}

export default React.memo(ImageCarousel)
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45
    },
    list: {

    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 40,
        // to make sure it is behind the images and not on,
        // backgroundColor: 'red',
        // height: 50,
        // width: 100

    },
    paginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 5,
    },
    activeLine: {
        backgroundColor: colors.black,
        width: 30
    }


})