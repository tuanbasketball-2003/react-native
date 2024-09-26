import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { products } from '../../../data/products'
import FavoritesItem from '../../../components/FavoritesItem/FavoritesItem'
import Header from '../../../components/Header/Header'
import { ServicesContext } from '../../../../App'
import { updateServices } from '../../../utils/backedCalls'

const Favorites = ({ navigation }) => {


    const { services, setServices } = useContext(ServicesContext);
    const likedServices = Array.isArray(services) ? services?.filter(service => service?.liked) : []

    const renderItem = ({ item }) => {
        console.log("Check item favortes", { item });

        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }
        const onRemove = async () => {
            const updatedServices = await updateServices(item?._id, { liked: false })
            if (Array.isArray(updatedServices)) {
                setServices(updatedServices)
            }
        }
        const onIconPress = () => {
            Alert.alert('Are you sure you want to remove this item from your favorite', '', [{ text: 'Yes', onPress: onRemove }, { text: 'Cancel' }])
        }
        return (
            <FavoritesItem onPress={onProductPress} onIconPress={onIconPress} {...item} />
        )
    }
    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList
                ListEmptyComponent={(<Text style={{ textAlign: 'center', marginTop: 40 }}>You do not anything</Text>)}
                data={likedServices}
                renderItem={renderItem}
                keyExtractor={(item) => String(item._id)}
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