import { StatusBar } from 'expo-status-bar';
import React from 'react';
// Image, StyleSheet, Text, TouchableOpacity, View => called component 
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import logo from './assets/logo.png'
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){
      alert("Permission to access camera roll is required!")
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if (pickerResult.cancelled === true) {
    return;
  }

  setSelectedImage({localUri: pickerResult.uri});
  };

  if (selectedImage !== null){
    return (
      <View wtyle={styles.container}>
        <Image
        source={{uri: selectedImage.localUri}}
        style={styles.thumbnail}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Image component는 명확하게 width,height를 명시해줘야 한다. 일반적으로 RN에서 사진 width:305 */}
      <Image source={{uri: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo}/>

      {/* Text => called component */}
      <Text style={styles.instructions}> 
      To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
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
  button: {
    backgroundColor: "blue",
    // padding : RN layout system 큰 components||다른 components들과의 배치 방법 (=flexbox)
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "cover"
  }
});
