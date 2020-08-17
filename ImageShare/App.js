import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      {/* Image component는 명확하게 width,height를 명시해줘야 한다. 일반적으로 RN에서 사진 width:305 */}
      <Image source={{uri: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo}/>

      <Text style={styles.instructions}> 
      To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305, 
    height: 159,
    // space things out between the logo and the instructions
    marginBottom: 10,
  },
  instructions: {
    color:'#888', 
    fontSize:18,
    // space around the edges of the screen
    marginHorizontal: 15,
  },
});
