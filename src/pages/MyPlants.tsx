import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'
import { formatDistance } from 'date-fns'

import { Header } from '../components/Header'
import colors from '../styles/colors'

import waterdropImg from '../assets/waterdrop.png'
import { FlatList } from 'react-native-gesture-handler'
import { PlantProps } from '../interfaces/Plant'
import { loadPlant } from '../libs/storage'
import pt from 'date-fns/locale/pt'
import { fonts } from '../styles/fonts'
import { PlantCardSecondary } from '../components/PlantCardSecondary'

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState('')

  useEffect(() => {
    async function loadStoragedData() {
      const plantsStoraged = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification || 0).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      )

      setMyPlants(plantsStoraged)
      setLoading(false)
    }

    loadStoragedData()
  }, [])

  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.spotlight}>
        <Image
          source={waterdropImg}
          style={styles.spotlightImage}
        />
        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item}/>
          )}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ flex:1 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: colors.background
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  spotlightImage: {
    width: 60,
    height: 60
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20 
  }
})