import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color';

const CheckBox = ({ checked, onCheck }) => {
    // console.log("INSIDE CHECKBOX");


    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.container}>

            {
                checked ? (
                    <View style={styles.innerContainer}>
                        <Image style={styles.checkIcon} source={require('../../assets/check_box.png')} />
                    </View>
                ) : null
            }
        </TouchableOpacity>



    )
}

export default React.memo(CheckBox)
const styles = StyleSheet.create({
    container: {
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22,
    },
    innerContainer: {
        backgroundColor: colors.grey,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon: {
        width: 12,
        height: 9
    },
})