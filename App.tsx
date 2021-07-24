import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Button, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Talibán</Text>
      <Image style={styles.logo} source={require('./assets/taliba-2.png')} />
      <StatusBar style="auto" />
      <Button title="Click Aqui" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'red',
    fontSize: 40,
  },
  logo:{
    width:200,
    height:150,
  }
});
