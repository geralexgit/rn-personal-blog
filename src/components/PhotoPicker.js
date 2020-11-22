import React, { useState } from 'react'
import { View, StyleSheet, Image, Button, Alert } from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  )
  if (status !== 'granted') {
    Alert.alert('Error', 'No access to camera')
    return false
  }
  return true
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null)
  const takePhoto = async () => {
    const hasPermissions = await askForPermissions()
    if (!hasPermissions) {
      return
    }
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    })
    setImage(img.uri)
    onPick(img.uri)
    console.log(img)
  }
  return (
    <View style={styles.wrapper}>
      <Button onPress={takePhoto} title="Take photo" />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
})
