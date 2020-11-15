import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const PostScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>PostScreen</Text>
    </View>
  )
}

PostScreen.navigationOptions = {
  headerTitle: 'Post screen',
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
