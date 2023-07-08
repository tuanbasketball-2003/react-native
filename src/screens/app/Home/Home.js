import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header/Header'
import { categories } from '../../../data/categories'
import CategoryBox from '../../../components/CategoryBox/CategoryBox'
import { products } from '../../../data/products'
import ProductHomeItem from '../../../components/ProductHomeItem/ProductHomeItem'

const Home = ({ navigation }) => {

    const [selectorCategory, setSelectorCategory] = useState();
    const [searchKeyWord, setSearchKeyWord] = useState();
    // console.log("Check searchKeyWord >>>", searchKeyWord);

    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(() => {
        if (selectorCategory && !searchKeyWord) {
            const updatedProducts = products.filter((product) => product.category === selectorCategory);
            setFilteredProducts(updatedProducts);
        } else if (selectorCategory && searchKeyWord) {
            const updatedProducts = products.filter((product) => product.category === selectorCategory && product.title.toLocaleLowerCase().includes(searchKeyWord.toLocaleLowerCase()));
            setFilteredProducts(updatedProducts);
        } else if (!selectorCategory && searchKeyWord) {
            const updatedProducts = products.filter((product) => product.title.toLocaleLowerCase().includes(searchKeyWord.toLocaleLowerCase()));
            setFilteredProducts(updatedProducts);
        } else if (!selectorCategory && !searchKeyWord) {
            setFilteredProducts(products)
        }
    }, [selectorCategory, searchKeyWord])

    const renderCategoryItem = ({ index, item }) => {

        return (
            <CategoryBox
                onPress={() => setSelectorCategory(item.id)}
                isSelected={item.id === selectorCategory}
                isFirst={index === 0}
                title={item.title} image={item.image}
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
            <Header showSearch onSearch={setSearchKeyWord} keyword={searchKeyWord} title='Find All You Need' />

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
                keyExtractor={(item) => String(item.id)}
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
        paddingHorizontal: 15
    }
})