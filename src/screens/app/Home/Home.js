import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header/Header'
import { categories } from '../../../data/categories'
import CategoryBox from '../../../components/CategoryBox/CategoryBox'
import ProductHomeItem from '../../../components/ProductHomeItem/ProductHomeItem'
import { getServices } from '../../../utils/backedCalls'
import { ServicesContext } from '../../../../App'
import { colors } from '../../../utils/color'

const Home = ({ navigation }) => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [filteredProducts, setFilteredProducts] = useState(services);

    // useEffect(() => {
    //     (async () => {
    //         const data = await getServices();
    //         console.log("Check data>>>", data);
    //         setServices(data);
    //     })
    // }, [])
    const { services, setServices } = useContext(ServicesContext);
    console.log("Services>>>>", services);
    useEffect(() => {
        (async () => {
            const data = await getServices();
            setServices(data);
            // console.log('Log data home >>>>', data);
        })()
    }, [])


    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = services.filter((product) => String(product?.category) === String(selectedCategory));
            setFilteredProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = services.filter((product) => String(product?.category) === String(selectedCategory) && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts);
        } else if (!selectedCategory && keyword) {
            const updatedProducts = services.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts);
        } else if (!keyword && !selectedCategory) {
            setFilteredProducts(services);
        }
    }, [selectedCategory, keyword, services])

    // useEffect(() => {
    //     if (selectorCategory && !searchKeyWord) {
    //         const updatedProducts = services.filter((product) => String(product?.category) === String(selectorCategory));
    //         setFilteredProducts(updatedProducts);
    //     } else if (selectorCategory && searchKeyWord) {
    //         const updatedProducts = services.filter((product) => String(product?.category) === String(selectorCategory) && product?.title?.toLocaleLowerCase().includes(searchKeyWord.toLocaleLowerCase()));
    //         setFilteredProducts(updatedProducts);
    //     } else if (!selectorCategory && searchKeyWord) {
    //         const updatedProducts = services.filter((product) => product?.title?.toLocaleLowerCase().includes(searchKeyWord.toLocaleLowerCase()));
    //         setFilteredProducts(updatedProducts);
    //     } else if (!selectorCategory && !searchKeyWord) {
    //         setFilteredProducts(services)
    //     }
    // }, [selectorCategory, searchKeyWord, services])

    const renderCategoryItem = ({ index, item }) => {

        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === setSelectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image}
            />
        )
    }

    const renderProductItem = ({ item }) => {
        // console.log("CHeck Item Home", item);

        const onProductPress = (product) => {
            // console.log("CHeck product Home", product);
            navigation.navigate('ProductDetails', { product })
        }
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
        )
    }
    return (
        <SafeAreaView>
            {/* <ScrollView style={styles.container}> */}
            <Header showSearch onSearch={setKeyword} keyword={keyword} title='Find All You Need' />

            {/* {FlatList thể loại} */}
            <FlatList style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => String(index)}
            />
            <FlatList
                style={styles.productList}
                numColumns={2} data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item._id)}
                ListFooterComponent={<View style={{ height: 200 }} />}
            />
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default React.memo(Home)

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    list: {
        paddingVertical: 15,
    },
    productList: {
        paddingHorizontal: 15,
    }
})