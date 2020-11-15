import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate('Post')
  }
  return (
    <View style={styles.center}>
      <Text>MainScreen!</Text>
      <Button title="to posts" onPress={() => goToPost()} />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'My Blog!',
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
