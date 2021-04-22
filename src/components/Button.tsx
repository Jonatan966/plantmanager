import React, { ReactNode } from 'react'
import { 
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity, 
  TouchableOpacityProps
} from 'react-native'

import colors from '../styles/colors'
import { fonts } from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps{
  children: ReactNode;
}

export function Button({children, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.button, rest.disabled && styles.disabled]}  
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    // marginBottom: 10,
    height: 56,
    width: '100%'
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading
  },
  disabled: {
    backgroundColor: colors.gray
  }
})
