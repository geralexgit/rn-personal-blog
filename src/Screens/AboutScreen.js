import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>app version 0.1</Text>
    </View>
  )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'About app',
  headerLeft: () => {
    return (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Toggle drawer"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  },
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
