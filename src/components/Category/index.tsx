import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps, ImageSourcePropType } from 'react-native'
import { styles } from './styles'

import discordImg from '../../assets/discord.png'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = TouchableOpacityProps & {
  title: string
  icon: ImageSourcePropType
  hasCheckedBox?: boolean
  checked?: boolean 
}

export default function Category({title, icon, checked = false, hasCheckedBox = true, ...rest}: Props) {
  const {secondary_40, secondary_50, secondary_70, secondary_85} = theme.colors

  return (
    <TouchableOpacity {...rest}>

      <LinearGradient 
          style={styles.container}
          colors={[secondary_50, secondary_70]}
      >
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.5}]}
          colors={[checked ? secondary_85 : secondary_50, secondary_40]}
        >
          {hasCheckedBox && <View style={checked ? styles.checked : styles.check} />}

          <Image 
            source={icon}
            style={styles.icon}
          />

          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>

    </TouchableOpacity>
  )
}