import {
    Feather,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons'
import {
    ImageBackground,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { useGetQuestions } from '../api'
import { INavigation } from '../utils/types'
import ActionBar from './ActionBar'
import CountdownTimer from './CountdownTimer'
import NavigationBar from './NavigationBar'
import { OptionsTab } from './OptionsTab'
export function PageView({ navigation }: INavigation) {
    const { data: questionData, error, refetch } = useGetQuestions()

    if (error) {
        return (
            <View style={styles.error_wrapper}>
                <Text>{error?.message}</Text>
                <Pressable style={styles.button} onPress={() => refetch()}>
                    Try Again
                </Pressable>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.safe_area}>
            <ImageBackground
                style={styles.background_image}
                source={{ uri: questionData?.image }}
            >
                <View style={styles.container}>
                    <View style={styles.top_view}>
                        <CountdownTimer />
                        <View style={styles.for_you_container}>
                            <Text style={styles.for_you}>For you</Text>
                        </View>
                        <View>
                            <MaterialIcons
                                name='search'
                                size={24}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <ActionBar />
                    <OptionsTab questionData={questionData} />
                    <View style={styles.topic}>
                        <Text style={styles.title}>
                            {questionData?.user?.name}
                        </Text>
                        <Text style={styles.subtitle}>
                            {questionData?.description}
                        </Text>
                    </View>
                </View>
                <View style={styles.playlist_container}>
                    <View style={styles.play_list_name_wrapper}>
                        <MaterialCommunityIcons
                            name='play-box-multiple'
                            size={24}
                            color='white'
                        />
                        <View style={styles.play_list_text_wrapper}>
                            <Text style={styles.play_list_text}>Playlist</Text>
                            <View style={styles.dot} />
                            <Text style={styles.play_list_text}>
                                {questionData?.playlist}
                            </Text>
                        </View>
                    </View>
                    <Feather name='chevron-right' size={24} color='white' />
                </View>
                <NavigationBar navigation={navigation} />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    error_wrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    button: {
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: 8,
        borderRadius: 4,
        fontFamily: 'SF-Pro-Rounded',
    },
    safe_area: {
        marginTop: StatusBar.currentHeight || 0,
        flex: 1,
        backgroundColor: 'transparent',
        fontFamily: 'SF-Pro-Rounded',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 16,
        position: 'relative',
        display: 'flex',
        backgroundColor: 'transparent',
    },
    background_image: {
        resizeMode: 'center',
        position: 'relative',
        flex: 1,
    },
    top_view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
    },
    underline: {
        backgroundColor: '#fff',
        height: 4,
        width: 30,
        margin: 'auto',
    },
    for_you_container: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        backgroundColor: 'transparent',
    },
    for_you: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        backgroundColor: 'transparent',
        fontFamily: 'SF-Pro-Rounded',
    },
    playlist_container: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#161616',
    },
    play_list_name_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    play_list_text_wrapper: {
        fontSize: 13,
        color: '#ffffff',
        fontWeight: '600',
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    play_list_text: {
        color: '#fff',
        fontFamily: 'SF-Pro-Rounded',
    },
    topic: {
        marginBottom: 16,
        backgroundColor: 'transparent',
    },
    title: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 6,
        fontFamily: 'SF-Pro-Rounded',
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '700',
        fontFamily: 'SF-Pro-Rounded',
    },
})
