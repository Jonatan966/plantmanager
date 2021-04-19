import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'

import mainIcon from '../assets/watering.png'
import colors from '../styles/colors'

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={mainIcon} style={styles.image}/>

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button}  
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          Começar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
  image: {
    width: 292,
    height: 284
  }
})
