import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './Card-style'

const Card = (props : any) => {
  return (
    <View style = {styles.mainView}>

    
        <View style = {styles.secondView}>
         <Text style={styles.scoreStyle} > SCORE : {props.score} </Text>
        <Text style = {styles.timeStyle} > {props.time} </Text>
        </View>

      <View style = {styles.questionView}>
        <Text style = {styles.questionStyle}> Does The Meaning Match The Text Color?  </Text>
      </View>

     <View style={{flex : 1, flexDirection : 'row', padding : 20}}> 

        <Text style = {styles.firstTextStyle}> {props.color} </Text>  
      <Text style = {{
        fontSize: 35,
        fontWeight: '600',
        borderWidth : 1,
        width : '50%',
        height : 150,
        borderColor : 'grey',
        borderRadius : 20,
        textAlign : 'center',
        textAlignVertical : 'center',
        backgroundColor :'white',
        color : props.random3,
      }}> {props.random2} </Text>
     

     </View>

     
     <View style={{flex : 1, flexDirection : 'row', padding : 20,}}> 

     
        <TouchableOpacity onPress={props.correctButton} style = {styles.correctButtonStyle}> 
            <Text style={{color:'white',textAlign:'center', fontSize:20}}> CORRECT </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={props.unCorrectButton} style={styles.unCorrectButtonStyle}> 
            <Text style={{color:'white', textAlign:'center', fontSize:20}}> UNCORRECT </Text>
        </TouchableOpacity>
         </View>

    
    </View>
  );
};

export default Card;
