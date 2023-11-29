import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home'
import Others from './src/pages/Others'
import { useEffect } from 'react'
import * as Font from 'expo-font'
export default function App() {
    useEffect(() => {
        (async () => {
          await Font.loadAsync({
            'SF-Pro-Rounded': require('./assets/fonts/SF-Pro-Rounded.ttf'),
          });
        })();
      }, []);
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
