import { View, Text, Button, Pressable, Image, Alert } from 'react-native'
import React from 'react'
import styles from './Menu_card_style';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Menu_card = ({navigation} : any) => {

  return (
    <View style = {styles.mainViev}>

      <View>
        <Text style = {styles.gameTitle}> Color Match </Text>
      </View>

      <View style = {styles.imageView}>
      <Image style={styles.imageStyle}
        
        source={require('../opening_page/rainbow.png')}
      />
      </View>



      <View>
        <Text style = {styles.explainText}> This Game improve your remembering skills </Text>
      </View>

      <View style = {styles.menuButtonView}>

        <Pressable style={styles.howToPlayButton}>
            <Text style={{color : 'white'}}> HOW TO PLAY? </Text>
        </Pressable>

        <Pressable style = {styles.playButton}>
            <Text style={{color : 'white'}}> PLAY! </Text>
        </Pressable>
      </View>

    </View>
  )
}

export default Menu_card