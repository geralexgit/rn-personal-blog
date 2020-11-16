import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    paddingVertical: 5,
    alignItems: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular',
  },
})
