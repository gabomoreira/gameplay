import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import {BorderlessButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'


type Props = {
  title: string
  action?: React.ReactNode 
}

export default function Header({title, action}: Props) {
  const {secondary_100, secondary_40, heading} = theme.colors

  function handleGoBack() {
    
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary_100, secondary_40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name='arrow-left' size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {action && (
        <View>
          { action }
        </View>
      )}
    </LinearGradient>
  )
}