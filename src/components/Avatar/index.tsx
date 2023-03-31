import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'

import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = {
  urlImage: string
}

export default function Profile({urlImage}: Props) {
  const {secondary_70, secondary_50} = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary_50, secondary_70]}
    >
      <Image 
        source={{uri: urlImage}}
        style={styles.image}
      />
    </LinearGradient>
  )
}