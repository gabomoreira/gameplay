import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import discordImg from '../../assets/discord.png'

export default function ButtonIcon() {
  return (
    <TouchableOpacity style={styles.container}>
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