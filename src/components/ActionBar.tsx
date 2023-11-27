import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import {
    FontAwesome,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons'

export default function ActionBar() {
    return (
        <View style={styles.container}>
            <View style={styles.icon_container}>
                <Image
                    source={require('../assets/images/add-icon.png')}
                    style={styles.add_icon}
                />
            </View>
            <View style={styles.icon_container}>
                <MaterialIcons name='favorite' size={30} color='white' />
                <Text style={styles.count}>87</Text>
            </View>
            <View style={styles.icon_container}>
                <FontAwesome name='commenting' size={30} color='white' />
                <Text style={styles.count}>2</Text>
            </View>
            <View style={styles.icon_container}>
                <FontAwesome name='bookmark' size={30} color='white' />
                <Text style={styles.count}>203</Text>
            </View>
            <View style={styles.icon_container}>
                <MaterialCommunityIcons name='share' size={30} color='white' />
                <Text style={styles.count}>17</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 8,
        top: 320,
        display: 'flex',
        gap: 15,
        padding: 2,
    },
    icon_container: {
        display: 'flex',
        gap: 2,
        alignItems: 'center',
    },
    count: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        color:'#fff'
    },
    add_icon: {
        width: 45,
        height: 45,
    },
})
