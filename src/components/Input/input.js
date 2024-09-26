import { Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/color'
import { useTheme } from '@react-navigation/native';

const Input = ({ label, options, type, isPassword, value, onChangeText, placeholder, style, ...props }) => {

    const [isPasswordVisible, setIsPassWordVisible] = useState(false);
    const [isPickerModalVisible, setPickerModelVisible] = useState(false)
    // console.log(props);
    const onEyePress = () => {
        setIsPassWordVisible(!isPasswordVisible)
    }

    const onSelect = (opt) => {
        onChangeText(opt);
        setPickerModelVisible(false)
    }
    // console.log('Check value Input>>>>>', value)
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'picker' ? (
                <Pressable onPress={() => setPickerModelVisible(true)} style={styles.inputContainer}>
                    {value ? (
                        <Text style={[styles.input, style]} >{value?.title}</Text>

                    ) : (

                        <Text style={[styles.placeholder, style]} >{placeholder}</Text>
                    )}


                    <Image style={styles.arrow} source={require('../../assets/arrow_right.png')} />
                </Pressable>
            ) : (
                <View style={styles.inputContainer}>

                    <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} style={[styles.input, style]} {...props} />
                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_close.png')} />
                        </Pressable>
                    ) : null}
                </View>
            )}
            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity activeOpacity={1} onPress={() => setPickerModelVisible(false)} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.headerTitle}>Select options</Text>

                        {options?.map(opt => {
                            if (!opt?.id) {
                                return null;
                            }

                            const selected = value?.id === opt?.id

                            return (
                                <Text onPress={() => onSelect(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>
                            )
                        }
                        )}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>

        </View>
    )
}

export default React.memo(Input)

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14

    },
    inputContainer: {
        borderWidth: 2,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{ rotate: '90deg' }],
    },
    placeholder: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        color: colors.lightGrey
    },
    modalWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        width: '80%'
    },
    headerTitle: {
        marginBottom: 16,
        color: colors.black,
        fontSize: 16
    },
    optionText: {
        color: colors.black,
        paddingVertical: 4,
        fontSize: 15,
    },
    selectedOption: {
        color: colors.blue,
        fontWeight: 'bold'
    }

})