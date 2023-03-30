import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

import leeSin from '../../assets/leeSin.png'
import ButtonIcon from '../../components/ButtonIcon'

export default function SignIn() {
  return (
    <View style={styles.container}>
        <Image 
            source={leeSin}
            style={styles.image}
        />

        <View style={styles.content}>
            <Text style={styles.title}>
                Organize {'\n'}
                suas jogatinas {'\n'}
                facilmente
            </Text>

            <Text style={styles.subtitle}>
                Crie grupos para jogar seus games {'\n'}
                favoritos com seus amigos
            </Text>

            <ButtonIcon />
        </View>
    </View>
  )
}