import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { products } from '../../../data/products'
import FavoritesItem from '../../../components/FavoritesItem/FavoritesItem'
import Header from '../../../components/Header/Header'
import { ProfileContext, ServicesContext } from '../../../../App'
import { deleteService } from '../../../utils/backedCalls'

const MyListings = ({ navigation }) => {


    const { services, setServices } = useContext(ServicesContext);
    const { profile } = useContext(ProfileContext);
    const mylikedServices = Array.isArray(services) ? services?.filter(service => service?.owner === profile?._id) : []
    // console.log("Check service>>>>", services);
    // console.log("setServices>>>", setServices);
    // console.log("mylikedServices >>>", mylikedServices);
    const renderItem = ({ item }) => {
        console.log("Check item favortes", item);
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }

        const onRemove = async () => {
            const updateServices = await deleteService(item?._id);
            setServices(updateServices)
        }

        return (
            <FavoritesItem onIconPress={onRemove} icon={require('../../../assets/delete.png')} onPress={onProductPress} {...item} />
        )
    }

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView>
            <Header title="My Listings" showBack onBackPress={goBack} />
            <FlatList
                data={services}
                renderItem={renderItem}
                keyExtractor={(item) => String(item._id)}
            />
        </SafeAreaView>
    )
}

export default React.memo(MyListings)

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})