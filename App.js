import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Position from './components/Position'

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current weather</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems:'center',
    justifyContent: 'center',
    },
    heading:{
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
    }
});
