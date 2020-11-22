import * as Font from 'expo-font'
import { DB } from './db'

export async function bootstrap() {
  try {
    await Font.loadAsync({
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'open-light': require('../assets/fonts/OpenSans-Light.ttf'),
    })
    await DB.init()
    console.log('db started...')
  } catch (e) {
    console.log('error ', e)
  }
}
