import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home'
import Others from './src/pages/Others'
import { AppContextProvider } from './src/context/AppContext'

export default function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                refetchOnMount: false,
                refetchOnWindowFocus:false
            },
        },
    })
    const Stack = createNativeStackNavigator()

    return (
        <AppContextProvider>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Home'>
                        <Stack.Screen
                            name='Home'
                            component={Home}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='Others'
                            component={Others}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </QueryClientProvider>
        </AppContextProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})