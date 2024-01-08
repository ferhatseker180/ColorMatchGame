import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components';

const GameScreen = ({ navigation }: any) => {

    const [points, setpoints] = useState(0)
    const [random1, setrandom1] = useState("")
    const [random2, setrandom2] = useState("")
    const [random3, setrandom3] = useState("black")

    let colors = ["red","blue","orange","black"]
    let duration = 60;

    const trueButton = () => {
      if(random3 === random1){
        setpoints(points+1);

        randomGenerator()
      }

      else {
        randomGenerator();
      }
    }

    const falseButton = () => {
      if(random3!== random1){
        setpoints(points+1);

        randomGenerator()
      }

      else {
        randomGenerator();
      }

    }

   
    useEffect(() => {
      randomGenerator()

    },[])

    const randomGenerator = () => {
      let r1 = Math.floor(Math.random() * colors.length)
      let r2 = Math.floor(Math.random() * colors.length)
      let r3 = Math.floor(Math.random() * colors.length)
      setrandom1(colors[r1])
      setrandom2(colors[r2])
      setrandom3(colors[r3])
  }

  return (

    <View style = {styles.container}>
      
      <Card
     score = {points}
     duration = {duration}
     color = {random1}
     random2 = {random2}
     random3 = {random3}

  
    correctButton = {trueButton}
     unCorrectButton = {falseButton}
 
     />

    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
    },
  
  });
  

export default GameScreen;