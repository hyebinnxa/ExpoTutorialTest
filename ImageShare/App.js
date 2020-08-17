import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      {/* Image component는 명확하게 width,height를 명시해줘야 한다. 일반적으로 RN에서 사진 width:305 */}
      <Image source={logo} style={{width:305, height:159}}/>

      <Text style={{color: '#888', fontSize: 18}}> 
      To share a photo from your phone with a friend, just press the button below!
      </Text>
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
});
