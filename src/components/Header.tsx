import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../styles/colors'
import { fonts } from '../styles/fonts'

const dayStates = {
  morning: {
    emoji: '🌄',
    greetingTime: 'Bom dia'
  },
  afternoon: {
    emoji: '☀',
    greetingTime: 'Boa tarde'
  },
  night: {
    emoji: '🌑',
    greetingTime: 'Boa noite'
  }
}

export function Header() {
  const [username, setUsername] = useState('. . .')
  const [dayState, setDayState] = useState<'morning' | 'afternoon' | 'night'>('morning')

  const currentDayState = dayStates[dayState]

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour >= 12 && currentHour < 17) {
      setDayState('afternoon')
    }
    else if (currentHour >= 17) {
      setDayState('night')
    }
    else setDayState('morning')
  }, [])

  useEffect(() => {
    async function loadStoragedUsername() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUsername(user || '')
    }
    loadStoragedUsername()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          {currentDayState.greetingTime},
        </Text>
        <Text style={styles.userName}>{username}</Text>
      </View>

      <Text style={styles.emoji}>
        {currentDayState.emoji}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  emoji: {
    fontSize: 70
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }
})