import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './src/color_match/components/Card'


const CountdownTimer = ({ onCountdownFinish }: any) => {
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalId);
      onCountdownFinish();
    };
  }, [onCountdownFinish]);

  // CountdownTimer bileşeni içinde hiçbir şey gösterilmeyecek
  return null;
};

const App = () => {

  const [points, setpoints] = useState(0)
    const [random1, setrandom1] = useState("")
    const [random2, setrandom2] = useState("")
    const [random3, setrandom3] = useState("black")

    const [countdown, setCountdown] = useState(20);

    let colors = ["red","blue","orange","black"]

    const handleCountdownFinish = () => {
      console.log("Süre Bitti")
    };

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

      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
      }, 1000);

      return () => {
        clearInterval(intervalId);
        handleCountdownFinish();
      };

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
     time = {countdown}
     score = {points}
     color = {random1}
     random2 = {random2}
     random3 = {random3}

     correctButton = {trueButton}
     unCorrectButton = {falseButton}
     
     />

   <CountdownTimer onCountdownFinish={handleCountdownFinish} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});


export default App
