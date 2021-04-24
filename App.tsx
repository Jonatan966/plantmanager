import React, { useEffect, useState } from 'react'
import AppLoading from 'expo-app-loading'
import * as Notifications from 'expo-notifications'
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

import { Routes } from './src/routes'
import { PlantProps } from './src/interfaces/Plant'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [initialScreen, setInitialScreen] = useState('Welcome')
  const [userLoading, setUserLoading] = useState(true)
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  })

  useEffect(() => {
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async notification => {
    //     const data = notification.request.content.data.plant as PlantProps
    //     console.log(data)
    //   }
    // )

    // return () => subscription.remove()
    async function verifyUser() {
      try {
        await AsyncStorage.getItem('@plantmanager:user')
        setInitialScreen('MyPlants')
      }
      catch {
        setInitialScreen('Welcome')
      }
      finally {
        setUserLoading(false)
      }
    }

    verifyUser()
  }, [])

  if (!fontsLoaded && !userLoading) {
   return <AppLoading/>
  }

  return (
    <Routes initialScreen={initialScreen}/>
  )
}
