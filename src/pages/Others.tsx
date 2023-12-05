import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { INavigation } from '../utils/types'

const Others = ({navigation:{navigation}}:INavigation) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page under construction</Text>
      <Button title='Go Back' onPress={()=> navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'#000',
    fontSize:16,
    fontWeight:'600' 

  }
})

export default Others