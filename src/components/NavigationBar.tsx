import { View, Text, StyleSheet, Pressable } from 'react-native'
import {
    Foundation,
    FontAwesome,
    Ionicons,
    MaterialIcons,
} from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import { INavigation } from '../utils/types'
const NavigationBar = ({navigation}:INavigation) => {
  const route = useRoute()
  const otherIconColors = route.name==='Others'? '#fff':'rgba(255, 255, 255, 0.40)'
    return (
        <View style={styles.container}>
            <Pressable style={styles.nav} onPress={()=> navigation.navigate('Home')}>
                <Foundation name='home' size={24} color={route.name==='Home'? '#fff':'rgba(255, 255, 255, 0.40)'} />

                <Text style={styles.label}>Home</Text>
            </Pressable>
            <Pressable style={styles.nav} onPress={()=> navigation.navigate('Others')}>
                <Ionicons name='compass' size={24} color={otherIconColors} />

                <Text style={[styles.label, {color:otherIconColors},]}>Discover</Text>
            </Pressable>
            <Pressable style={styles.nav} onPress={()=> navigation.navigate('Others')}>
                <MaterialIcons name='timer' size={24} color={otherIconColors} />

                <Text style={[styles.label, {color:otherIconColors},]}>Activity</Text>
            </Pressable>
            <Pressable style={styles.nav} onPress={()=> navigation.navigate('Others')}>
                <FontAwesome name='bookmark' size={24} color={otherIconColors} />

                <Text style={[styles.label, {color:otherIconColors},]}>Bookmarks</Text>
            </Pressable>
            <Pressable style={styles.nav} onPress={()=> navigation.navigate('Others')}>
                <FontAwesome name='user-circle' size={24} color={otherIconColors} />
                <Text style={[styles.label, {color:otherIconColors},]}>Profile</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical:6,
        backgroundColor: '#000',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    label: {
        color: '#fff',
        fontSize:10,
        fontWeight:'500',
        fontFamily: 'SF-Pro-Rounded',
    },
})

export default NavigationBar
