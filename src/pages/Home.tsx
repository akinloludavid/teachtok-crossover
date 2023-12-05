import { View } from 'react-native'
import React from 'react'
import { PageView } from '../components/PageView'

const Home = ({navigation}:{navigation:any}) => {
  return (
    <View style={{flex:1, backgroundColor:'transparent'}}>
      <PageView navigation={navigation}/>
    </View>
  )
}

export default Home