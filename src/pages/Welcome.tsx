import React from 'react'
import { 
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {Feather} from '@expo/vector-icons'

import mainIcon from '../assets/watering.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import { fonts } from '../styles/fonts'

export function Welcome() {
  const navigation = useNavigation()
  
  function handleStart() {
    navigation.navigate("UserIdentification")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Text>

        <Image 
          source={mainIcon} 
          style={styles.image}
          resizeMode='contain'
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Button onPress={handleStart}>
          <Feather 
            name='chevron-right'
            style={styles.buttonIcon}
          />
        </Button>
      </View>
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
})
