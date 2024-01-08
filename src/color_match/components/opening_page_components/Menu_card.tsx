import { View, Text, Button, Pressable, Image } from 'react-native'
import React from 'react'
import styles from './menu_card_style';

const Menu_card = () => {

  return (
    <View style = {styles.mainViev}>

      <View>
        <Text style = {styles.gameTitle}> Color Match </Text>
      </View>

      <View style = {styles.imageView}>
      <Image style={styles.imageStyle}
        
        source={require("../opening_page_components/rainbow.png")}
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