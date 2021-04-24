import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { StackRoutes } from './stack.routes'

interface Params {
  initialScreen: string;
}

export const Routes = ({ initialScreen }: Params) => (
  <NavigationContainer>
    <StackRoutes 
      initialScreen={initialScreen}
    />
  </NavigationContainer>
)