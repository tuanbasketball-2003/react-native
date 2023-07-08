import { TouchableOpacity, StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/color';
import Input from '../Input/input';

const Header = ({ title, onBackPress, onSearch, onLogout, showLogout, showSearch, showBack, keyword }) => {

    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSeachClick = () => {
        setShowSearchInput(search => !search)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>

                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSeachClick}>
                        <Image style={styles.icon} source={require('../../assets/search.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}

                <Text style={styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}
            </View>
            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder='Type your keyword ...' />
            ) : null}
        </View>

    )
}

export default React.memo(Header)

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 24,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 25
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 25,
        height: 25
    },
    space: {
        width: 15
    }
})