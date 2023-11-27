import { View, Text } from 'react-native'
import React from 'react'
import { PageView } from '../components/PageView'
import NavigationBar from '../components/NavigationBar'

const Home = ({navigation}:{navigation:any}) => {
  return (
    <View style={{flex:1, backgroundColor:'transparent'}}>
      <PageView navigation={navigation}/>
    </View>
  )
}

export default Home