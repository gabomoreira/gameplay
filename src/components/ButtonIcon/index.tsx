import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

import discordImg from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
  title: string
}

export default function ButtonIcon({title, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
       <View  style={styles.iconWrapper}>
            <Image 
                source={discordImg}
                style={styles.image}
            />
       </View>

       <Text style={styles.title}>
            Entrar com Discord
        </Text>

    </TouchableOpacity>
  )
}