import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { DATA } from '../data'

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }

  return (
    <PostList
      data={DATA.filter((post) => post.booked)}
      onOpen={openPostHandler}
    />
  )
}

BookedScreen.navigationOptions = {
  headerTitle: 'Booked',
  headerLeft: () => {
    return (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Toggle drawer"
          iconName="ios-menu"
          onPress={() => console.log('Press photo')}
        />
      </HeaderButtons>
    )
  },
}
