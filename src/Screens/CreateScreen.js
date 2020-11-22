import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { addPost } from '../store/actions/post'

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const img =
    'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'
  const publishHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img,
      booked: false,
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create Post</Text>
          <TextInput
            style={styles.textArea}
            value={text}
            onChangeText={setText}
            placeholder="Input post text"
            multiline
          />
          <Image
            style={{
              width: '100%',
              height: 200,
              marginBottom: 10,
            }}
            source={{
              uri: img,
            }}
          />
          <Button
            title="Publish"
            color={THEME.MAIN_COLOR}
            onPress={publishHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Create post',
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
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  },
})
