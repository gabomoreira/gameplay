import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'
import {MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'

export default function ButtonAdd({...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialCommunityIcons 
        name='plus'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  )
}