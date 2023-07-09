import { ActivityIndicator, Image, KeyboardAvoidingView, Linking, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header/Header'
import { colors } from '../../../utils/color'
import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../../components/Input/input'
import { categories } from '../../../data/categories'
import Button from '../../../components/Button/button'

const CreateListin = ({ navigation }) => {

    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false)

    console.log('Check Values createListin', values)

    const goBack = () => {
        navigation.goBack()
    }

    const uploadNewImage = async () => {
        setLoading(true)
        const result = await launchImageLibrary();
        // console.log("Check result createlist >>>", result);
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
            setLoading(false)
        }
    }
    // console.log("Check images createlist >>>>", images);
    const onDeleteImage = (image) => {
        setImages((list) => {
            const filterImages = list.filter(img => img?.fileName !== image?.fileName);
            return filterImages;
        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }))
    }

    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing" />
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <Text style={styles.sectionTitle}>Upload Photos</Text>
                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadImageContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadImageCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>
                        {images?.map(image => {
                            return (
                                <View style={styles.imageContent} key={image?.fileName}>
                                    <Image style={styles.image} source={{ uri: image?.uri }} />
                                    <Pressable hitSlop={20} onPress={() => onDeleteImage(image)} >
                                        <Image style={styles.delete} source={require('../../../assets/close.png')} />
                                    </Pressable>
                                </View>
                            )
                        })}
                        {loading ? (
                            <ActivityIndicator />
                        ) : null}
                    </View>

                    <Input placeholder="Lising Title" label="Title" value={values.title} onChangeText={(v) => onChange(v, 'title')} />
                    <Input placeholder="Select the category" label="Category" value={values.category} onChangeText={(v) => onChange(v, 'category')} type="picker" options={categories} />
                    <Input placeholder="Enter Price in USD" label="Price" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric" />
                    <Input style={styles.textarea} placeholder="Tell us more ... " label="Description" value={values.description} onChangeText={(v) => onChange(v, 'description')} multiline />


                </KeyboardAvoidingView>
                <Button title="Submit" style={styles.button} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListin)

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 14,
        color: colors.blue,
        marginBottom: 16
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 5
    },
    uploadImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 12,
        marginTop: 8
    },
    uploadImageCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.lightGrey,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center'
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 24,
        marginTop: -3
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: 16
    },
    imageContent: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 3,
    },
    delete: {
        width: 24,
        height: 24,
        marginTop: -8,
        marginLeft: -20
    },
    textarea: {
        minHeight: 150
    },
    button: {
        marginBottom: 100,
    }

})