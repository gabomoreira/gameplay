import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {useNavigation} from '@react-navigation/native'

import leeSin from '../../assets/leeSin.png'
import ButtonIcon from '../../components/ButtonIcon'

export default function SignIn() {
    const navigation = useNavigation()

    function handleSignIn() {
        navigation.navigate('Home')
    }

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

            <ButtonIcon 
                title='Entrar com Discord' 
                onPress={handleSignIn} 
                />
        </View>
    </View>
  )
}