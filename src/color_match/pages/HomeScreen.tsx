import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu_card from '../components/opening_page_components/Menu_card';

const HomeScreen = ({ navigation }: any) => {
  return (

    <View style = {styles.container}>
     
     <Menu_card />

    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
    },
  
  });
  

export default HomeScreen;