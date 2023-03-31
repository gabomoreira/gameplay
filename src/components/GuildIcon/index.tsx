import React from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'
import { styles } from './styles'

type Props = {
  uri: string
}

export default function GuildIcon({uri}: Props) {
  return (
    <Image 
      source={{uri}}
      style={styles.image}
      resizeMode='contain'
    />
  )
}