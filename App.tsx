import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/color_match/pages/HomeScreen';
import GameScreen from './src/color_match/pages/GameScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
