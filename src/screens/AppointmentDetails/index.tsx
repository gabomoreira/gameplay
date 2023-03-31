import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {useNavigation} from '@react-navigation/native'

import leeSin from '../../assets/leeSin.png'
import ButtonIcon from '../../components/ButtonIcon'
import Background from '../../components/Background'
import Header from '../../components/Header'

export default function AppointmentDetails() {
    const navigation = useNavigation()

    function handleSignIn() {
        navigation.navigate('Home')
    }

  return (
    <Background>
        <View style={styles.container}>
            <Header title='Detalhes' />
        </View>
    </Background>
  )
}