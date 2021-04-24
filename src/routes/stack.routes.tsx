import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'

import { Welcome } from '../pages/Welcome'
import { UserIdentification } from '../pages/UserIdentification'
import { Confirmation } from '../pages/Confirmation'
import { PlantSave } from '../pages/PlantSave'
import { MyPlants } from '../pages/MyPlants'
import { AuthRoutes } from './tab.routes'
import AsyncStorage from '@react-native-async-storage/async-storage'

const stackRoutes = createStackNavigator()

interface Params {
  initialScreen: string;
}

export const StackRoutes: React.FC<Params> = ({ initialScreen }) => {
  return (
    <stackRoutes.Navigator
      headerMode='none'
      initialRouteName={initialScreen}
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        }
      }}
    >
      <stackRoutes.Screen
        name='Welcome'
        component={Welcome}
      />
        <stackRoutes.Screen
        name='UserIdentification'
        component={UserIdentification}
      />
      <stackRoutes.Screen
        name='Confirmation'
        component={Confirmation}
      />
      <stackRoutes.Screen
        name='PlantSelect'
        component={AuthRoutes}
      />
      <stackRoutes.Screen
        name='PlantSave'
        component={PlantSave}
      />
      <stackRoutes.Screen
        name='MyPlants'
        component={AuthRoutes}
      />
    </stackRoutes.Navigator>
  )
}