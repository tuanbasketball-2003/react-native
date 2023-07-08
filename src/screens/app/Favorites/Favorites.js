import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { products } from '../../../data/products'
import FavoritesItem from '../../../components/FavoritesItem/FavoritesItem'
import Header from '../../../components/Header/Header'

const Favorites = ({ navigation }) => {
    const renderItem = ({ item }) => {
        console.log("Check item favortes", item);
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }
        return (
            <FavoritesItem onPress={onProductPress} {...item} />
        )
    }
    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </SafeAreaView>
    )
}

export default React.memo(Favorites)

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})