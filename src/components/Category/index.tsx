import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps, ImageSourcePropType } from 'react-native'
import { styles } from './styles'

import discordImg from '../../assets/discord.png'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = TouchableOpacityProps & {
  title: string
  icon: ImageSourcePropType
  checked?: boolean 
}

export default function Category({title, icon, checked = false, ...rest}: Props) {
  const {secondary_50, secondary_70} = theme.colors

  return (
    <TouchableOpacity {...rest}>

      <LinearGradient 
          style={styles.container}
          colors={[secondary_50, secondary_70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4}]}>
          <View style={checked ? styles.checked : styles.check} />

          <Image 
            source={icon}
            style={styles.icon}
          />

          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </LinearGradient>

    </TouchableOpacity>
  )
}